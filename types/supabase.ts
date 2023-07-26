export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      post: {
        Row: {
          created_at: string
          full_name: string | null
          href: string
          id: number
          Title: string
          username: string
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          href?: string
          id?: number
          Title: string
          username?: string
        }
        Update: {
          created_at?: string
          full_name?: string | null
          href?: string
          id?: number
          Title?: string
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
