export interface Audit {
  id: string;
  createBy?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  deletedBy?: string | null;
}
