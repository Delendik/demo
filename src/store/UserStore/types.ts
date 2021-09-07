export interface IMood {
  id: number
  user_id: string
  date: string
  rate: number
}

export interface IEngagement {
  category_title: string
  engagement: null | number
  color: string
}

export enum Onboarding_state {
  INITIAL = `onboarding_initial`,
  INSTALLED = `onboarding_extension_installed_step`,
  COMPLETED = `onboarding_completed`,
}

export interface IUser {
  id: string
  picture: string | null
  email: string
  name: string
  breath: boolean
  mood_picker: boolean
  gdpr: boolean
  mood: IMood | null
  warming: null
  tabs_count: number
  onboarding_state: Onboarding_state
  engagement: IEngagement[]
  facebook_connected: boolean
  google_connected: boolean
}

export interface IDeleteFeedback {
  reason: string
  comment: string
}

export interface IReferrer {
  referrer: string
  entry_url: string
}

export interface IMoodRates {
  date: string
  rate: 1 | 2 | 3 | 4 | 5
}
