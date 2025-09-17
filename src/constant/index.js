import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"

// Equipment Images
import treadmill from "../assets/equipment/Treadmill.jpg"
import crosstrainer from "../assets/equipment/crosstrainer.webp"
import cycle from "../assets/equipment/cycle.jpg"
import crosscable from "../assets/equipment/crosscable.avif"
import hex from "../assets/equipment/hex.webp"
import pec from "../assets/equipment/pec.jpg"
import smith from "../assets/equipment/smith.jpg"
import legpress from "../assets/equipment/legpress.png"
import legcurl from "../assets/equipment/legcurl.jpeg"
import lattpulldown from "../assets/equipment/lattpulldown.jpeg"

// Transformation Images
import fatImage from "../assets/transformation/fat.jpeg"
import fitImage from "../assets/transformation/fit.jpg"

const amenities = [
  {
    icon: "🏃‍♂️",
    title: "Cardio Equipment",
    desc: "Treadmills, ellipticals, and more",
  },
  {
    icon: "🏋️‍♂️",
    title: "Rubberized Machines",
    desc: "Premium weight training",
  },
  {
    icon: "🧖‍♂️",
    title: "Steam Room",
    desc: "Available",
  },
  {
    icon: "🛵",
    title: "Parking Facility",
    desc: "Only 2 wheel parking",
  },
]

const classList = [
  {
    icon: "🧘‍♂️",
    title: "Yoga",
    desc: "Improve flexibility and mindfulness.",
  },
  {
    icon: "🔥",
    title: "HIIT",
    desc: "High intensity interval training for fat loss.",
  },
  {
    icon: "🏋️‍♂️",
    title: "Strength",
    desc: "Build muscle and strength with expert guidance.",
  },
  {
    icon: "💃",
    title: "Zumba",
    desc: "Designed to be an enjoyable and effective way to build cardiovascular health, endurance, and flexibility for people of all ages and fitness levels.",
  },
]

const trainers = [
  {
    name: "Rahul Sharma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    certificates: "ACE Certified, CPR/AED",
    experience: "7 years",
    fees: "₹1200/month",
    desc: "Specialist in strength and conditioning.",
  },
  {
    name: "Priya Singh",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    certificates: "ISSA, Yoga Alliance",
    experience: "5 years",
    fees: "₹1000/month",
    desc: "Yoga and functional training expert.",
  },
  {
    name: "Amit Verma",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    certificates: "NSCA, Nutritionist",
    experience: "10 years",
    fees: "₹1500/month",
    desc: "Body transformation and nutrition coach.",
  },
  {
    name: "Sneha Patel2",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    certificates: "ACE, Zumba Instructor",
    experience: "6 years",
    fees: "₹1100/month",
    desc: "Zumba and group fitness specialist.",
  },
  {
    name: "Rahul Sharma2",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    certificates: "ACE Certified, CPR/AED",
    experience: "7 years",
    fees: "₹1200/month",
    desc: "Specialist in strength and conditioning.",
  },
  {
    name: "Priya Singh2",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    certificates: "ISSA, Yoga Alliance",
    experience: "5 years",
    fees: "₹1000/month",
    desc: "Yoga and functional training expert.",
  },
  {
    name: "Amit Verma2",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    certificates: "NSCA, Nutritionist",
    experience: "10 years",
    fees: "₹1500/month",
    desc: "Body transformation and nutrition coach.",
  },
  {
    name: "Sneha Patel2",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    certificates: "ACE, Zumba Instructor",
    experience: "6 years",
    fees: "₹1100/month",
    desc: "Zumba and group fitness specialist.",
  },
]

const equipmentImages = [
  {
    src: treadmill,
    alt: "Treadmill",
    label: "Treadmill",
    quantity: 3,
  },
  {
    src: crosstrainer,
    alt: "Cross Trainer",
    label: "Cross Trainer",
    quantity: 2,
  },
  {
    src: cycle,
    alt: "Stationary Bike",
    label: "Cycle",
    quantity: 3,
  },
  {
    src: crosscable,
    alt: "Cable Machine",
    label: "Cable Machine",
    quantity: 2,
  },
  {
    src: hex,
    alt: "Hex Machine",
    label: "Hex Machine",
    quantity: 1,
  },
  {
    src: pec,
    alt: "Pec Dec Machine",
    label: "Pec Dec Machine",
    quantity: 2,
  },
  {
    src: smith,
    alt: "Smith Machine",
    label: "Smith Machine",
    quantity: 1,
  },
  {
    src: legpress,
    alt: "Leg Press Machine",
    label: "Leg Press Machine",
    quantity: 1,
  },
  {
    src: legcurl,
    alt: "Leg Curl Machine",
    label: "Leg Curl Machine",
    quantity: 1,
  },
  {
    src: lattpulldown,
    alt: "Lat pulldown Machine",
    label: "Lat pulldown Machine",
    quantity: 2,
  },
]

const navLinks = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#classes", label: "Classes" },
]

const reviews = [
  {
    name: "John Doe",
    beforeImg: fatImage,
    afterImg: fitImage,
    review:
      "Joining this gym transformed my life! With the help of Trainer Alex, I lost 20kg and gained confidence.",
    trainer: "Alex Smith",
  },
  {
    name: "Priya Sharma",
    beforeImg: fatImage,
    afterImg: fitImage,
    review:
      "The group classes and personalized attention from Trainer Maya made all the difference in my journey.",
    trainer: "Maya Patel",
  },
  {
    name: "John Doe4",
    beforeImg: fatImage,
    afterImg: fitImage,
    review:
      "Joining this gym transformed my life! With the help of Trainer Alex, I lost 20kg and gained confidence.",
    trainer: "Alex Smith",
  },
  {
    name: "Priya Sharma4",
    beforeImg: fatImage,
    afterImg: fitImage,
    review:
      "The group classes and personalized attention from Trainer Maya made all the difference in my journey.",
    trainer: "Maya Patel",
  },
  {
    name: "John Doe3",
    beforeImg: fatImage,
    afterImg: fitImage,
    review:
      "Joining this gym transformed my life! With the help of Trainer Alex, I lost 20kg and gained confidence.",
    trainer: "Alex Smith",
  },
  {
    name: "Priya Sharma3",
    beforeImg: fatImage,
    afterImg: fitImage,
    review:
      "The group classes and personalized attention from Trainer Maya made all the difference in my journey.",
    trainer: "Maya Patel",
  },
  {
    name: "John Doe2",
    beforeImg: fatImage,
    afterImg: fitImage,
    review:
      "Joining this gym transformed my life! With the help of Trainer Alex, I lost 20kg and gained confidence.",
    trainer: "Alex Smith",
  },
  {
    name: "Priya Sharma2",
    beforeImg: fatImage,
    afterImg: fitImage,
    review:
      "The group classes and personalized attention from Trainer Maya made all the difference in my journey.",
    trainer: "Maya Patel",
  },
]

const pricingPlans = [
  { label: "Per Day", price: "₹200" },
  { label: "Per month", price: "₹2500" },
  { label: "Per 3-month", price: "₹4500" },
  { label: "Per 6-Month", price: "₹6000" },
  { label: "1 year", price: "₹8500" },
]

const socialLinks = [
  {
    href: "https://wa.me/9594385172",
    label: "WhatsApp",
    icon: FaWhatsapp,
    className: "hover:text-green-400 transition-colors",
  },
  {
    href: "https://youtube.com/",
    label: "YouTube",
    icon: FaYoutube,
    className: "hover:text-red-500 transition-colors",
  },
  {
    href: "https://www.instagram.com/crosstrekfitnsp/",
    label: "Instagram",
    icon: FaInstagram,
    className: "hover:text-pink-400 transition-colors",
  },
]

const CONTACT_INFO = {
  phones: ["989270050", "7028432885"],
  offer: "Limited period offer! For more discount contact us.",
}

export {
  amenities,
  classList,
  trainers,
  equipmentImages,
  navLinks,
  reviews,
  pricingPlans,
  socialLinks,
  CONTACT_INFO,
}
