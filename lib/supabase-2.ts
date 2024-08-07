export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ImageProof: {
        Row: {
          id: string
          productId: string
          url: string
        }
        Insert: {
          id: string
          productId: string
          url: string
        }
        Update: {
          id?: string
          productId?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "ImageProof_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "Investment"
            referencedColumns: ["id"]
          },
        ]
      }
      Investment: {
        Row: {
          createdAt: string
          dateToStartIncrease: string | null
          email: string
          id: string
          name: string
          planId: string
          startIncrease: boolean
          transactionId: string
          updatedAt: string
          userId: string
          walletPaidInto: Database["public"]["Enums"]["Wallets"]
        }
        Insert: {
          createdAt?: string
          dateToStartIncrease?: string | null
          email: string
          id: string
          name: string
          planId: string
          startIncrease?: boolean
          transactionId: string
          updatedAt: string
          userId: string
          walletPaidInto: Database["public"]["Enums"]["Wallets"]
        }
        Update: {
          createdAt?: string
          dateToStartIncrease?: string | null
          email?: string
          id?: string
          name?: string
          planId?: string
          startIncrease?: boolean
          transactionId?: string
          updatedAt?: string
          userId?: string
          walletPaidInto?: Database["public"]["Enums"]["Wallets"]
        }
        Relationships: [
          {
            foreignKeyName: "Investment_planId_fkey"
            columns: ["planId"]
            isOneToOne: false
            referencedRelation: "InvestmentPlan"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Investment_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      InvestmentPlan: {
        Row: {
          createdAt: string
          creditAmount: number
          dailyProfit: number
          debitAmount: number
          depositFee: string
          duration: number
          durationDays: number
          id: string
          name: Database["public"]["Enums"]["InvestmentPlanName"]
          periodicProfit: number
          price: number
          principalReturn: boolean
          principalWithdraw: boolean
          profitPercent: number
          rating: number
          totalProfit: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          creditAmount: number
          dailyProfit: number
          debitAmount: number
          depositFee: string
          duration: number
          durationDays: number
          id: string
          name: Database["public"]["Enums"]["InvestmentPlanName"]
          periodicProfit: number
          price: number
          principalReturn: boolean
          principalWithdraw: boolean
          profitPercent: number
          rating: number
          totalProfit: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          creditAmount?: number
          dailyProfit?: number
          debitAmount?: number
          depositFee?: string
          duration?: number
          durationDays?: number
          id?: string
          name?: Database["public"]["Enums"]["InvestmentPlanName"]
          periodicProfit?: number
          price?: number
          principalReturn?: boolean
          principalWithdraw?: boolean
          profitPercent?: number
          rating?: number
          totalProfit?: number
          updatedAt?: string
        }
        Relationships: []
      }
      InvestmentStatus: {
        Row: {
          createdAt: string
          id: string
          investmentId: string
          status: Database["public"]["Enums"]["InvestmentStatusEnum"]
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          investmentId: string
          status: Database["public"]["Enums"]["InvestmentStatusEnum"]
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          investmentId?: string
          status?: Database["public"]["Enums"]["InvestmentStatusEnum"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "InvestmentStatus_investmentId_fkey"
            columns: ["investmentId"]
            isOneToOne: false
            referencedRelation: "Investment"
            referencedColumns: ["id"]
          },
        ]
      }
      InvestmentTracker: {
        Row: {
          id: string
          investmentId: string
          lastProfitUpdate: string
          totalProfit: number
        }
        Insert: {
          id: string
          investmentId: string
          lastProfitUpdate?: string
          totalProfit?: number
        }
        Update: {
          id?: string
          investmentId?: string
          lastProfitUpdate?: string
          totalProfit?: number
        }
        Relationships: [
          {
            foreignKeyName: "InvestmentTracker_investmentId_fkey"
            columns: ["investmentId"]
            isOneToOne: false
            referencedRelation: "Investment"
            referencedColumns: ["id"]
          },
        ]
      }
      TransactionHistory: {
        Row: {
          amount: number
          createdAt: string
          description: string
          id: string
          investmentId: string | null
          type: Database["public"]["Enums"]["TransactionType"]
          updatedAt: string
          userId: string
        }
        Insert: {
          amount: number
          createdAt?: string
          description: string
          id: string
          investmentId?: string | null
          type: Database["public"]["Enums"]["TransactionType"]
          updatedAt: string
          userId: string
        }
        Update: {
          amount?: number
          createdAt?: string
          description?: string
          id?: string
          investmentId?: string | null
          type?: Database["public"]["Enums"]["TransactionType"]
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "TransactionHistory_investmentId_fkey"
            columns: ["investmentId"]
            isOneToOne: false
            referencedRelation: "Investment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "TransactionHistory_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          accountName: string | null
          accountNumber: string | null
          bankName: string | null
          createdAt: string
          email: string
          firstName: string | null
          fullName: string | null
          id: string
          imageUrl: string | null
          referredById: string | null
          role: Database["public"]["Enums"]["UserRole"]
          updatedAt: string
          userName: string | null
        }
        Insert: {
          accountName?: string | null
          accountNumber?: string | null
          bankName?: string | null
          createdAt?: string
          email: string
          firstName?: string | null
          fullName?: string | null
          id: string
          imageUrl?: string | null
          referredById?: string | null
          role?: Database["public"]["Enums"]["UserRole"]
          updatedAt: string
          userName?: string | null
        }
        Update: {
          accountName?: string | null
          accountNumber?: string | null
          bankName?: string | null
          createdAt?: string
          email?: string
          firstName?: string | null
          fullName?: string | null
          id?: string
          imageUrl?: string | null
          referredById?: string | null
          role?: Database["public"]["Enums"]["UserRole"]
          updatedAt?: string
          userName?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "User_referredById_fkey"
            columns: ["referredById"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      UserTracker: {
        Row: {
          balance: number
          id: string
          lastProfitUpdate: string
          lastWithdrawal: string
          totalProfit: number
          totalWithdrawal: number
          userId: string
          withdrawableBalance: number
        }
        Insert: {
          balance?: number
          id: string
          lastProfitUpdate?: string
          lastWithdrawal: string
          totalProfit?: number
          totalWithdrawal?: number
          userId: string
          withdrawableBalance?: number
        }
        Update: {
          balance?: number
          id?: string
          lastProfitUpdate?: string
          lastWithdrawal?: string
          totalProfit?: number
          totalWithdrawal?: number
          userId?: string
          withdrawableBalance?: number
        }
        Relationships: [
          {
            foreignKeyName: "UserTracker_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Withdrawal: {
        Row: {
          amount: number
          createdAt: string
          cryptoType: Database["public"]["Enums"]["Wallets"]
          id: string
          status: Database["public"]["Enums"]["WithdrawalStatus"]
          updatedAt: string
          userId: string
          walletAddress: string
        }
        Insert: {
          amount: number
          createdAt?: string
          cryptoType: Database["public"]["Enums"]["Wallets"]
          id: string
          status: Database["public"]["Enums"]["WithdrawalStatus"]
          updatedAt: string
          userId: string
          walletAddress: string
        }
        Update: {
          amount?: number
          createdAt?: string
          cryptoType?: Database["public"]["Enums"]["Wallets"]
          id?: string
          status?: Database["public"]["Enums"]["WithdrawalStatus"]
          updatedAt?: string
          userId?: string
          walletAddress?: string
        }
        Relationships: [
          {
            foreignKeyName: "Withdrawal_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      InvestmentPlanName:
        | "VIP1"
        | "VIP2"
        | "VIP3"
        | "VIP4"
        | "VIP5"
        | "VIP6"
        | "VIP7"
      InvestmentStatusEnum:
        | "PAYMENT_MADE"
        | "NOT_CONFIRMED"
        | "CONFIRMED"
        | "SOLD"
      TransactionType: "DEPOSIT" | "WITHDRAWAL" | "NEUTRAL"
      UserRole: "user" | "admin"
      Wallets: "BTC" | "DOGE" | "BCH" | "LTC" | "ETH" | "USDT"
      WithdrawalStatus: "UNCONFIRMED" | "CONFIRMED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
