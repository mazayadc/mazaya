export interface Department {
  id: number;
  name: string;
  shortName: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  services: string[];
}

export const departments: Department[] = [
  {
    id: 1,
    name: "Orthodontics",
    shortName: "Orthodontics",
    description: "Specialized care for teeth alignment and bite correction using braces and aligners.",
    iconSrc: "/ortho.png",
    iconAlt: "Orthodontics Icon",
    services: [
      "Diagnosis and treatment of misaligned teeth and jaw",
      "Traditional metal braces, ceramic braces, and lingual braces",
      "Clear aligners (e.g., Invisalign)",
      "Retainers (fixed and removable)",
      "Space maintainers for children",
      "Jaw growth modification (for children & teens)",
      "Surgical orthodontics for severe misalignment",
    ],
  },
  {
    id: 2,
    name: "Pedodontics (Children's Dentistry)",
    shortName: "Pedodontics",
    description: "Comprehensive dental care for children, ensuring healthy smiles from an early age.",
    iconSrc: "/pedia.png",
    iconAlt: "Pedodontics Icon",
    services: [
      "Dental checkups for infants and children",
      "Fluoride treatments to prevent cavities",
      "Dental sealants for cavity protection",
      "Pulpotomy and pulpectomy (root canal for kids)",
      "Space maintainers for early tooth loss",
      "Treatment of dental trauma in children",
      "Habit counseling (thumb-sucking, pacifier use)",
    ],
  },
  {
    id: 3,
    name: "Implantology (Dental Implants & Restoration)",
    shortName: "Implantology",
    description: "Advanced tooth replacement solutions with durable and natural-looking dental implants.",
    iconSrc: "/implant.png",
    iconAlt: "Implantology Icon",
    services: [
      "Dental implant placement (single, multiple, or full-mouth)",
      "Bone grafting for implant support",
      "Sinus lift surgery for upper jaw implants",
      "All-on-4 or All-on-6 implant-supported dentures",
      "Implant maintenance and repair",
      "Soft tissue grafting around implants",
    ],
  },
  {
    id: 4,
    name: "Prosthodontics (Replacement of Missing Teeth)",
    shortName: "Prosthodontics",
    description: "Restorative solutions including crowns, bridges, and dentures for complete oral rehabilitation.",
    iconSrc: "/clean.png",
    iconAlt: "Prosthodontics Icon",
    services: [
      "Crowns, bridges, and veneers",
      "Complete and partial dentures",
      "Full-mouth rehabilitation",
      "Smile makeover with cosmetic restorations",
      "TMJ (jaw joint) treatment",
      "Digital smile design (DSD)",
    ],
  },
  {
    id: 5,
    name: "Periodontics (Gum & Bone Health)",
    shortName: "Periodontics",
    description: "Expert care for gum health and treatment of periodontal diseases to maintain strong foundations.",
    iconSrc: "/periodo.png",
    iconAlt: "Periodontics Icon",
    services: [
      "Diagnosis and treatment of gum diseases (gingivitis, periodontitis)",
      "Scaling and root planing (deep cleaning)",
      "Gum grafting for receding gums",
      "Bone grafting for jawbone preservation",
      "Periodontal surgery for advanced gum disease",
      "Laser gum treatments",
    ],
  },
  {
    id: 6,
    name: "Endodontics (Root Canal & Tooth Preservation)",
    shortName: "Endodontics",
    description: "Specialized root canal treatments to save damaged teeth and relieve dental pain.",
    iconSrc: "/endo.png",
    iconAlt: "Endodontics Icon",
    services: [
      "Root canal treatment (RCT)",
      "Apicoectomy (root-end surgery)",
      "Internal bleaching for discolored teeth",
      "Management of cracked teeth",
      "Treatment of dental trauma and abscesses",
      "Re-treatment of failed root canals",
    ],
  },
];

export const faqItems = [
  {
    question: "What is general dentistry?",
    answer: "General dentistry refers to the routine care and treatment of the teeth, gums, and mouth. Dentists in this field provide services such as cleanings, fillings, extractions, and preventative care.",
  },
  {
    question: "How often should I visit the dentist?",
    answer: "It's generally recommended to visit the dentist at least twice a year for routine check-ups and cleanings. However, if you have specific oral health concerns, you might need more frequent visits.",
  },
  {
    question: "What should I do if I have a toothache?",
    answer: "If you have a toothache, it's important to contact your dentist as soon as possible to determine the cause. In the meantime, over-the-counter pain relievers and warm saltwater rinses can help alleviate discomfort.",
  },
  {
    question: "How can I prevent cavities?",
    answer: "Cavities are caused by tooth decay, which occurs when bacteria in the mouth produce acid from sugars. To prevent cavities, brush your teeth twice a day, floss daily, and visit the dentist regularly for cleanings.",
  },
  {
    question: "What is a filling, and why would I need one?",
    answer: "A filling is used to restore a tooth that has been damaged by decay. The dentist removes the decayed portion of the tooth and fills the area with materials like composite resin, silver amalgam, or gold.",
  },
  {
    question: "What is a root canal, and when is it necessary?",
    answer: "A root canal is a treatment used to repair and save a tooth that has become infected or badly decayed. It involves removing the infected pulp from inside the tooth, cleaning the area, and sealing it.",
  },
  {
    question: "What is the best way to whiten my teeth?",
    answer: "Teeth whitening options include professional treatments provided by your dentist or over-the-counter products like whitening toothpaste and strips. Consulting your dentist will help you choose the safest and most effective option for your teeth.",
  },
  {
    question: "What is gum disease, and how can I prevent it?",
    answer: "Gum disease (gingivitis or periodontitis) is an infection of the gums caused by plaque buildup. Brushing, flossing, and regular dental check-ups can help prevent gum disease.",
  },
  {
    question: "What should I do if I have a broken or chipped tooth?",
    answer: "If you break or chip a tooth, contact your dentist immediately. They may be able to repair it with bonding, a crown, or other treatments depending on the extent of the damage.",
  },
  {
    question: "Is it safe to get dental X-rays?",
    answer: "Dental X-rays are generally safe, and the amount of radiation used is very low. Dentists only take X-rays when necessary for diagnosing or monitoring oral health.",
  },
];
