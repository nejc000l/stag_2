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
      pages: {
        Row: {
          avatar_url: string | null;
          href: string | null;
          id: string;
          profile_id: string;
          text: string | null;
          title: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          href?: string | null;
          id?: string;
          profile_id: string;
          text?: string | null;
          title?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          href?: string | null;
          id?: string;
          profile_id?: string;
          text?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_profile_id_fkey";
            columns: ["profile_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
        };
        Insert: {
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
        };
        Update: {
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
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
