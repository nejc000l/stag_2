export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      post: {
        Row: {
          created_at: string;
          href: string;
          id: number;
          Title: string;
        };
        Insert: {
          created_at?: string;
          href?: string;
          id?: number;
          Title: string;
        };
        Update: {
          created_at?: string;
          href?: string;
          id?: number;
          Title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
