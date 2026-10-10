// Content shared by the mobile (Figma) layout and the tablet/desktop layout.
// Add a logo, doctor or hospital here and every layout picks it up.

export type ClientLogo = { name: string; slug: string; width: number; height: number };

// Logos are pre-trimmed to their visible content (public/images/clients); width/height are the file's pixels.
export const CLIENT_LOGOS_ROW_ONE: ClientLogo[] = [
  { name: "CSB Bank", slug: "csb-bank", width: 640, height: 162 },
  { name: "Mistral of Milan", slug: "mistral-of-milan", width: 246, height: 63 },
  { name: "Fortis", slug: "fortis", width: 487, height: 200 },
  { name: "Danish Academy", slug: "danish-academy", width: 289, height: 65 },
  { name: "The Taplow Group", slug: "taplow-group", width: 452, height: 200 },
  { name: "Mediland Hospital and Research Centre", slug: "mediland", width: 640, height: 174 },
  { name: "Delhivery", slug: "delhivery", width: 640, height: 108 },
  { name: "Ink & Inspiration", slug: "ink-and-inspiration", width: 345, height: 200 },
  { name: "Jagannath University", slug: "jagannath-university", width: 600, height: 200 },
  { name: "Government of Assam", slug: "govt-of-assam", width: 251, height: 80 },
  { name: "Lifesave Hospital", slug: "lifesave-hospital", width: 640, height: 133 },
  { name: "Sheeya", slug: "sheeya", width: 190, height: 44 },
];

export const CLIENT_LOGOS_ROW_TWO: ClientLogo[] = [
  { name: "inDrive", slug: "indrive", width: 640, height: 181 },
  { name: "Care and Cure Multi-speciality Hospital", slug: "care-and-cure-hospital", width: 640, height: 167 },
  { name: "Maya Jewellers", slug: "maya-jewellers", width: 190, height: 53 },
  { name: "AVI Enterprises", slug: "avi-enterprises", width: 640, height: 125 },
  { name: "Jeevan Jyoti Hospital & Research Center", slug: "jeevan-jyoti-hospital", width: 337, height: 81 },
  { name: "Hotel Rudraksh", slug: "hotel-rudraksh", width: 640, height: 164 },
  { name: "Dental Remedy", slug: "dental-remedy", width: 615, height: 200 },
  { name: "Siva Sundari Nari Sikshashram", slug: "siva-sundari-nari-sikshashram", width: 258, height: 61 },
  { name: "ALK Pure 8+", slug: "alk-pure", width: 640, height: 164 },
  { name: "Ayu Bandhan", slug: "ayu-bandhan", width: 449, height: 200 },
  { name: "Pratidhi Welfare Foundation", slug: "pratidhi-welfare-foundation", width: 237, height: 72 },
];

/** Sizes a logo so every logo carries roughly the same visual weight, within height/width caps. */
export function logoDisplaySize({ width, height }: ClientLogo, area: number, maxHeight: number, maxWidth: number) {
  const aspect = width / height;
  let h = Math.min(maxHeight, Math.sqrt(area / aspect));
  let w = h * aspect;
  if (w > maxWidth) {
    w = maxWidth;
    h = w / aspect;
  }
  return { width: Math.round(w), height: Math.round(h) };
}

export type Doctor = { image: string; name: string; specialty: string };

// Names and specialties as written in the Figma doctors strip.
export const DOCTORS: Doctor[] = [
  { image: "/images/doctor-kinnor-das.png", name: "Dr. Kinnor Das", specialty: "Dermatologist" },
  { image: "/images/doctor-nupur-dabbas.png", name: "Dr. Nupur Dabbas", specialty: "Ophthamologist" },
  { image: "/images/doctor-raj-kumar.png", name: "Dr. Raj Kumar", specialty: "NeuroSurgeon" },
  { image: "/images/doctor-sambuddha-dhar.png", name: "Dr. Sambuddha Dhar", specialty: "NeuroSurgeon" },
  { image: "/images/doctor-priyanka-deb.png", name: "Dr. Priyanka Deb", specialty: "Paediatrician" },
  { image: "/images/doctor-ratnadip-bose.png", name: "Dr. Ratnadip Bose", specialty: "Neurologist" },
  { image: "/images/doctor-angshuman-nag.png", name: "Dr. Angshuman Nag", specialty: "BDS, Dentist" },
];

export type Hospital = { image: string; name: string; location: string };

// Names and locations as written in Figma.
export const HOSPITALS: Hospital[] = [
  { image: "/images/life-save-hospital.png", name: "Life Save Hospital", location: "Bijoy Nagar Guwahati" },
  { image: "/images/jjims-hospital.png", name: "JJIMS Hospital", location: "Meherpur Silchar" },
  { image: "/images/hospital-desun.png", name: "Desun Hospital", location: "Kosba Kolkatta" },
  { image: "/images/hospital-snss.png", name: "SNSS Hospital", location: "Park Road Silchar" },
  { image: "/images/hospital-mediland.png", name: "Mediland Hospital", location: "Itkhola Silchar" },
];
