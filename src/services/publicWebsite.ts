const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type TrainingPlan = {
  id: string;
  name: string;
  frequency: string;
  days: string;
  price: string;
  priceLabel: string;
  previousPrice?: string;
  policy: string;
  benefits: string[];
  visible: boolean;
  sortOrder?: number;
};

export type MembershipOption = {
  id: string;
  planId: string;
  period: string;
  price: string;
  kind: 'mensualidad' | 'promocion' | 'beneficio';
  sortOrder?: number;
};

export type PromoCampaign = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  active: boolean;
};

export type PromoPack = {
  id: string;
  campaignId: string;
  name: string;
  price: string;
  description: string;
  visible: boolean;
  sortOrder?: number;
};

export type GalleryItem = {
  id: string;
  title: string;
  tag: string;
  image: string;
  imageName?: string;
  featured: boolean;
  status: 'Publicado' | 'Borrador';
};

export type ResultStory = {
  id: string;
  title: string;
  before: string;
  after: string;
  image: string;
  imageName?: string;
  status: 'Publicado' | 'Borrador';
};

export type Testimonial = {
  id: string;
  quote: string;
  authorLabel: string;
  image: string;
  imageName?: string;
  accent: 'green' | 'white' | 'muted';
  status: 'Publicado' | 'Borrador';
};

export type ClassScheduleItem = {
  id: string;
  day: string;
  focus: string;
  time: string;
  intensity: string;
  sortOrder?: number;
};

export type StudentSchedule = {
  title: string;
  label: string;
  description: string;
  hours: string[];
};

export type WeeklyPlanSchedule = {
  id: string;
  group: string;
  plan: string;
  sortOrder?: number;
  days: {
    day: string;
    focus: string;
    position?: number;
  }[];
};

export type PublicPlan = TrainingPlan & {
  membershipOptions: MembershipOption[];
};

export type PublicWebsiteData = {
  plans: PublicPlan[];
  activeCampaign?: PromoCampaign;
  promoPacks: PromoPack[];
  gallery: GalleryItem[];
  results: ResultStory[];
  testimonials: Testimonial[];
  classSchedule: ClassScheduleItem[];
  studentSchedule: StudentSchedule;
  weeklySchedules: WeeklyPlanSchedule[];
};

async function apiGet<T>(path: string): Promise<T> {
  if (!API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL no está configurado.');
  }

  const baseUrl = API_URL.replace(/\/$/, '');
  const normalizedPath = baseUrl.endsWith('/api') && path.startsWith('/api/') ? path.replace('/api', '') : path;
  const res = await fetch(`${baseUrl}${normalizedPath}`, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Error cargando ${path}`);
  }

  return res.json();
}

function bySortOrder<T extends { sortOrder?: number }>(a: T, b: T) {
  return (a.sortOrder ?? 0) - (b.sortOrder ?? 0);
}

export const publicWebsiteService = {
  getPlans() {
    return apiGet<TrainingPlan[]>('/api/training-plans');
  },

  getMembershipOptions() {
    return apiGet<MembershipOption[]>('/api/membership-options');
  },

  getPromoCampaigns() {
    return apiGet<PromoCampaign[]>('/api/promo-campaigns');
  },

  getPromoPacks() {
    return apiGet<PromoPack[]>('/api/promo-packs');
  },

  getGallery() {
    return apiGet<GalleryItem[]>('/api/content/gallery');
  },

  getResults() {
    return apiGet<ResultStory[]>('/api/content/results');
  },

  getTestimonials() {
    return apiGet<Testimonial[]>('/api/content/testimonials');
  },

  getClassSchedule() {
    return apiGet<ClassScheduleItem[]>('/api/schedules/classes');
  },

  getStudentSchedule() {
    return apiGet<StudentSchedule>('/api/schedules/student');
  },

  getWeeklyPlanSchedules() {
    return apiGet<WeeklyPlanSchedule[]>('/api/schedules/weekly-plans');
  },
};

export async function getPublicWebsiteData(): Promise<PublicWebsiteData> {
  const [
    plans,
    memberships,
    campaigns,
    promoPacks,
    gallery,
    results,
    testimonials,
    classSchedule,
    studentSchedule,
    weeklySchedules,
  ] = await Promise.all([
    publicWebsiteService.getPlans(),
    publicWebsiteService.getMembershipOptions(),
    publicWebsiteService.getPromoCampaigns(),
    publicWebsiteService.getPromoPacks(),
    publicWebsiteService.getGallery(),
    publicWebsiteService.getResults(),
    publicWebsiteService.getTestimonials(),
    publicWebsiteService.getClassSchedule(),
    publicWebsiteService.getStudentSchedule(),
    publicWebsiteService.getWeeklyPlanSchedules(),
  ]);

  const visiblePlans = plans
    .filter((plan) => plan.visible)
    .sort(bySortOrder)
    .map((plan) => ({
      ...plan,
      membershipOptions: memberships.filter((membership) => membership.planId === plan.id).sort(bySortOrder),
    }));
  const activeCampaign = campaigns.find((campaign) => campaign.active);
  const visiblePromoPacks = promoPacks.filter((pack) => pack.visible).sort(bySortOrder);
  const publishedGallery = gallery.filter((item) => item.status === 'Publicado');
  const publishedResults = results.filter((item) => item.status === 'Publicado');
  const publishedTestimonials = testimonials.filter((item) => item.status === 'Publicado');
  const sortedWeeklySchedules = weeklySchedules.sort(bySortOrder).map((schedule) => ({
    ...schedule,
    days: [...schedule.days].sort((a, b) => (a.position ?? 0) - (b.position ?? 0)),
  }));

  return {
    plans: visiblePlans,
    activeCampaign,
    promoPacks: visiblePromoPacks,
    gallery: publishedGallery,
    results: publishedResults,
    testimonials: publishedTestimonials,
    classSchedule: classSchedule.sort(bySortOrder),
    studentSchedule,
    weeklySchedules: sortedWeeklySchedules,
  };
}
