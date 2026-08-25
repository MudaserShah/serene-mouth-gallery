// Service cover images — cropped from the client's "OUR SERVICES" flyer.
// Client will send proper individual photos per service later; when that
// happens, just swap the relevant `cover` (and add to `gallery`) below.
import dentalImplants from "@/assets/services/dental-implants.png";
import wisdomToothSurgery from "@/assets/services/wisdom-tooth-surgery.png";
import jawFaceFractureRepair from "@/assets/services/jaw-face-fracture-repair.png";
import jawCystsTumors from "@/assets/services/jaw-cysts-tumors.png";
import correctivesJawSurgery from "@/assets/services/correctives-jaw-surgery.png";
import faceInfection from "@/assets/services/face-infection.png";
import viralBacterialFacialInfection from "@/assets/services/viral-bacterial-facial-infection.png";
import braces from "@/assets/services/braces.png";
import completeDenture from "@/assets/services/complete-denture.png";
import aligners from "@/assets/services/aligners.png";
import gumsDisease from "@/assets/services/gums-disease.png";
import teethWhitening from "@/assets/services/teeth-whitening.png";
import laserTeethWhitening from "@/assets/services/laser-teeth-whitening.png";
import rootCanalTreatment from "@/assets/services/root-canal-treatment.png";
import childDentistry from "@/assets/services/child-dentistry.png";
import crownBridge from "@/assets/services/crown-bridge.png";

// Real clinic photos for the homepage "Clinic Gallery" section.
import clinicStorageTv from "@/assets/gallery/clinic-storage-tv.jpeg";
import clinicTreatmentRoom1 from "@/assets/gallery/clinic-treatment-room-1.jpeg";
import clinicTreatmentRoom2 from "@/assets/gallery/clinic-treatment-room-2.jpeg";
import clinicSignboard from "@/assets/gallery/clinic-signboard.jpeg";
import clinicOffice1 from "@/assets/gallery/clinic-office-1.jpeg";
import clinicOffice2 from "@/assets/gallery/clinic-office-2.jpeg";
import clinicBuildingDay from "@/assets/gallery/clinic-building-day.jpeg";
import clinicBuildingDusk from "@/assets/gallery/clinic-building-dusk.jpeg";

export type GalleryImage = { src: string; alt: string };

export type ServiceItem = {
  slug: string;
  title: string;
  desc: string;
  // Card image shown on the Services grid (and gallery hero).
  cover: string;
  // Photos shown on this service's own gallery page — clicking the
  // service card on the homepage opens /gallery/$slug with these.
  gallery: GalleryImage[];
};

// NOTE: Doctor/client naye case photos dega — unko src/assets/services
// mein daal kar yahan respective service ke `gallery` array mein import
// karke add karna hai (src + alt). Order aur position flyer ("OUR
// SERVICES") ke exact mutabiq rakhi gayi hai — homepage grid isi order
// mein (4 columns par) render hoti hai.
export const services: ServiceItem[] = [
  {
    slug: "dental-implants",
    title: "Dental Implant Surgery",
    desc: "Titanium implant surgery with life-like restorations.",
    cover: dentalImplants,
    gallery: [{ src: dentalImplants, alt: "Dental implant surgery" }],
  },
  {
    slug: "wisdom-tooth-surgery",
    title: "Wisdom Tooth Surgery",
    desc: "Painless impaction removal and extractions.",
    cover: wisdomToothSurgery,
    gallery: [{ src: wisdomToothSurgery, alt: "Wisdom tooth surgery" }],
  },
  {
    slug: "jaw-face-fracture-repair",
    title: "Jaw & Face Fracture Repair",
    desc: "Fixation and reconstruction of facial fractures.",
    cover: jawFaceFractureRepair,
    gallery: [{ src: jawFaceFractureRepair, alt: "Jaw & face fracture repair" }],
  },
  {
    slug: "jaw-cysts-tumors",
    title: "Jaw Cysts & Tumors",
    desc: "Diagnosis and surgical removal of jaw cysts & tumors.",
    cover: jawCystsTumors,
    gallery: [{ src: jawCystsTumors, alt: "Jaw cysts & tumors" }],
  },
  {
    slug: "correctives-jaw-surgery",
    title: "Correctives Jaw Surgery",
    desc: "Corrective (orthognathic) jaw surgery for alignment issues.",
    cover: correctivesJawSurgery,
    gallery: [{ src: correctivesJawSurgery, alt: "Correctives jaw surgery" }],
  },
  {
    slug: "face-infection",
    title: "Face Infection",
    desc: "Diagnosis and treatment of facial infections.",
    cover: faceInfection,
    gallery: [{ src: faceInfection, alt: "Face infection treatment" }],
  },
  {
    slug: "viral-bacterial-facial-infection",
    title: "Viral & Bacterial Facial Infection",
    desc: "Care for viral and bacterial facial skin infections.",
    cover: viralBacterialFacialInfection,
    gallery: [{ src: viralBacterialFacialInfection, alt: "Viral & bacterial facial infection" }],
  },
  {
    slug: "braces",
    title: "Braces",
    desc: "Fixed braces for teeth alignment and bite correction.",
    cover: braces,
    gallery: [{ src: braces, alt: "Braces treatment" }],
  },
  {
    slug: "complete-denture",
    title: "Complete Denture",
    desc: "Custom-made complete dentures for full arch replacement.",
    cover: completeDenture,
    gallery: [{ src: completeDenture, alt: "Complete denture" }],
  },
  {
    slug: "aligners",
    title: "Aligners",
    desc: "Clear, removable aligners for a discreet straighter smile.",
    cover: aligners,
    gallery: [{ src: aligners, alt: "Clear aligners" }],
  },
  {
    slug: "gums-disease",
    title: "Gums Disease",
    desc: "Diagnosis and treatment of gum (periodontal) disease.",
    cover: gumsDisease,
    gallery: [{ src: gumsDisease, alt: "Gums disease treatment" }],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    desc: "Professional whitening for a brighter smile.",
    cover: teethWhitening,
    gallery: [{ src: teethWhitening, alt: "Teeth whitening" }],
  },
  {
    slug: "laser-teeth-whitening",
    title: "Laser Teeth Whitening",
    desc: "Fast, in-clinic laser teeth whitening.",
    cover: laserTeethWhitening,
    gallery: [{ src: laserTeethWhitening, alt: "Laser teeth whitening" }],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    desc: "Precision RCT with tooth-coloured fillings.",
    cover: rootCanalTreatment,
    gallery: [{ src: rootCanalTreatment, alt: "Root canal treatment" }],
  },
  {
    slug: "child-dentistry",
    title: "Child Dentistry",
    desc: "Gentle dental care designed for children.",
    cover: childDentistry,
    gallery: [{ src: childDentistry, alt: "Child dentistry" }],
  },
  {
    slug: "crown-bridge",
    title: "Crown & Bridge",
    desc: "Custom crowns and bridges to restore damaged teeth.",
    cover: crownBridge,
    gallery: [{ src: crownBridge, alt: "Crown & bridge" }],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Simple, direct clinic gallery — no categories. Doctor uploads clinic
// photos here (add the file to src/assets/gallery and push it into this
// array).
export const clinicGallery: GalleryImage[] = [
  { src: clinicSignboard, alt: "Clinic signboard — Center of Dental Implant & Face Surgery" },
  { src: clinicTreatmentRoom1, alt: "Dental treatment room" },
  { src: clinicTreatmentRoom2, alt: "Dental treatment room, second view" },
  { src: clinicStorageTv, alt: "Clinic waiting area & storage" },
  { src: clinicOffice1, alt: "Doctor's office" },
  { src: clinicOffice2, alt: "Doctor's office, second view" },
  { src: clinicBuildingDay, alt: "Clinic building — day view" },
  { src: clinicBuildingDusk, alt: "Clinic building — evening view" },
];
