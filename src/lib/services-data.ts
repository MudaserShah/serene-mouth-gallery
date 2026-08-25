// Service cover images — cropped from the client's "OUR SERVICES" flyer.
// Client will send proper individual photos per service later; when that
// happens, just swap the relevant `cover` (and add to `gallery`) below.
import wisdomToothSurgery from "@/assets/services/wisdom-tooth-surgery.png";
import jawCystsTumors from "@/assets/services/jaw-cysts-tumors.png";
import correctivesJawSurgery from "@/assets/services/correctives-jaw-surgery.png";
import viralBacterialFacialInfection from "@/assets/services/viral-bacterial-facial-infection.png";
import braces from "@/assets/services/braces.png";
import completeDenture from "@/assets/services/complete-denture.png";
import aligners from "@/assets/services/aligners.png";
import laserTeethWhitening from "@/assets/services/laser-teeth-whitening.png";
import childDentistry from "@/assets/services/child-dentistry.png";
import crownBridge from "@/assets/services/crown-bridge.png";

// Real client case photos
import dentalImplantMain from "@/assets/services/dental-implant-main.jpeg";
import dentalImplant1 from "@/assets/services/dental-implant-1.jpeg";
import dentalImplant2 from "@/assets/services/dental-implant-2.jpeg";
import dentalImplant3 from "@/assets/services/dental-implant-3.jpeg";
import dentalImplant4 from "@/assets/services/dental-implant-4.jpeg";
import dentalImplant5 from "@/assets/services/dental-implant-5.jpeg";

import faceInfectionMain from "@/assets/services/face-infection-main.jpeg";
import faceInfection1 from "@/assets/services/face-infection-1.jpeg";

import veneersMain from "@/assets/services/veneers-main.jpeg";
import veneers1 from "@/assets/services/veneers-1.jpeg";
import veneers2 from "@/assets/services/veneers-2.jpeg";

import rootCanalMain from "@/assets/services/root-canal-main.jpeg";
import rootCanal1 from "@/assets/services/root-canal-1.jpeg";
import rootCanal3 from "@/assets/services/root-canal-3.jpeg";

import gumsDisease1 from "@/assets/services/gums-disease-1.jpeg";
import gumsDisease2 from "@/assets/services/gums-disease-2.jpeg";
import jawFaceFracture1 from "@/assets/services/jaw-face-fracture-1.jpeg";
import jawFaceFracture2 from "@/assets/services/jaw-face-fracture-2.jpeg";
import wisdomToothSurgery2 from "@/assets/services/wisdom-tooth-surgery-2.jpeg";

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
    cover: dentalImplantMain,
    gallery: [
      { src: dentalImplantMain, alt: "Dental implant surgery" },
      { src: dentalImplant1, alt: "Dental implant X-ray" },
      { src: dentalImplant2, alt: "Dental implant X-ray, close view" },
      { src: dentalImplant3, alt: "Dental implant X-ray, close view" },
      { src: dentalImplant4, alt: "Dental implant X-ray, close view" },
      { src: dentalImplant5, alt: "Dental implant X-ray, full arch" },
    ],
  },
  {
    slug: "wisdom-tooth-surgery",
    title: "Wisdom Tooth Surgery",
    desc: "Painless impaction removal and extractions.",
    cover: wisdomToothSurgery,
    gallery: [
      { src: wisdomToothSurgery, alt: "Wisdom tooth surgery" },
      { src: wisdomToothSurgery2, alt: "Impacted wisdom tooth illustration" },
    ],
  },
  {
    slug: "jaw-face-fracture-repair",
    title: "Jaw & Face Fracture Repair",
    desc: "Fixation and reconstruction of facial fractures.",
    cover: jawFaceFracture1,
    gallery: [
      { src: jawFaceFracture1, alt: "Jaw & face fracture repair, post-surgery" },
      { src: jawFaceFracture2, alt: "Jaw & face fracture repair, titanium plate fixation" },
    ],
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
    cover: faceInfectionMain,
    gallery: [
      { src: faceInfectionMain, alt: "Face infection treatment" },
      { src: faceInfection1, alt: "Face infection, before treatment" },
    ],
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
    cover: gumsDisease1,
    gallery: [
      { src: gumsDisease1, alt: "Gums disease treatment, before and after" },
      { src: gumsDisease2, alt: "Gum disease, inflamed gum tissue" },
    ],
  },
  {
    slug: "veneers",
    title: "Veneers",
    desc: "Custom veneers for a flawless, natural-looking smile.",
    cover: veneersMain,
    gallery: [
      { src: veneersMain, alt: "Veneers procedure" },
      { src: veneers1, alt: "Veneers procedure, curing light" },
      { src: veneers2, alt: "Veneers, before and after" },
    ],
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
    cover: rootCanalMain,
    gallery: [
      { src: rootCanalMain, alt: "Root canal treatment X-ray" },
      { src: rootCanal1, alt: "Root canal treatment X-ray, close view" },
      { src: rootCanal3, alt: "Root canal treatment X-ray, close view" },
    ],
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
