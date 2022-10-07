export interface ProjectItem {
  logo: string;
  fullName: string;
  name: string;
  coSecondaryCategories: categoryItem[];
  coPrimaryCategory: string;
  coStage: any;
  coTechnologies: categoryItem[];
  country: categoryItem[];
  email: string;
  foundationDate: number;
  introduction: any;
  investorOnHomepage: boolean;
  isActive: boolean;
  isFeatured: boolean;
  phone: any;
  priorityPoint: any;
  slug: string;
  tagline: string;
  createdAt: number;
  badge: object[];
  city: any;
  cityName: any;
}

export interface categoryItem {
  name: string;
  _id: string;
}

export interface statusCode {
  statusCode: number;
}

export interface Message {
  message: string;
}

export type ResApi = statusCode & Message & { data?: any };

export type ResApiErr = statusCode &
  Message & {
    code: number;
    message: string | string[];
    statusText: string;
    status: number | string;
    data: any;
  };
