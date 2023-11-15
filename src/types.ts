interface Category {
    alias: string
    title: string
}

export interface Coordinates {
    longitude: number
    latitude: number
}

interface Location {
    address1: string
    address2: string
    address3: string
    city: string
    zip_code: string
    country: string
    state: string
    display_address: string[]
}

export interface Business {
    id: string
    alias: string
    name: string
    image_url: string
    is_closed: boolean
    url: string
    review_count: number
    categories: Category[]
    rating: number
    coordinates: Coordinates
    transactions: string[]
    price: string
    location: Location
    phone: string
    display_phone: string
    distance: number
}

export interface Filters {
    sortBy: string
    openNow: boolean
}

export interface BusinessDetail {
    id: string
    alias: string
    name: string
    image_url: string
    is_claimed: boolean
    is_closed: boolean
    URL: string
    phone: string
    display_phone: string
    review_count: number
    categories: Category[]
    rating: number
    location: Location
    coordinates: Coordinates
    photos: string[]
    price: string
    hours: Hours[]
    transactions: string[]
}

interface Hours {
    open: OpeningHourPerDay[]
    hours_type: string
    is_open_now: boolean
}

export interface OpeningHourPerDay {
    is_overnight: boolean
    start: string
    end: string
    day: number
}

export interface Review {
    id: string
    URL: string
    text: string
    rating: number
    time_created: string
    user: User
}

interface User {
    id: string
    profile_url: string
    image_url: string
    name: string
}
