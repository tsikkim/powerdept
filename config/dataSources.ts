
export type Station = "Tadong" | "Deorali";

export type RevenueSection = "collection" | "reports";
export type MaintenanceSection = "circuit" | "transformer";

export type DataItem = {
  type: "excel" | "image" | "link";
  url: string;
};

export const DATA_SOURCES: Record<
  Station,
  {
    revenue: Record<RevenueSection, DataItem>;
    maintenance: Record<MaintenanceSection, DataItem>;
  }
> = {
  Tadong: {
    revenue: {
      collection: {
        type: "excel",
        url: "https://docs.google.com/spreadsheets/d/15phl8-LyPhZyX9vgelL6dwIvjttMM8fDpp3GpTLMewQ/edit?usp=sharing",
      },
      reports: {
        type: "excel",
        url: "https://example.com/tadong/reports.xlsx",
      },
    },
    maintenance: {

      circuit: {
        type: "image",
        url: "https://example.com/tadong/circuit.png",
      },
      transformer: {
        type: "image",
        url: "https://example.com/tadong/transformer.png",
      },
    },
  },

  Deorali: {
    revenue: {
      collection: {
        type: "excel",
        url: "https://docs.google.com/spreadsheets/d/1XGR0_wDPONahSChvU2qjmHZcZIuKt2UG8pKa0zxgEYc/edit?usp=sharing",
      },
      reports: {
        type: "excel",
        url: "https://example.com/deorali/reports.xlsx",
      },

    },
    maintenance: {
      circuit: {
        type: "image",
        url: "https://example.com/deorali/circuit.png",
      },
      transformer: {
        type: "image",
        url: "https://example.com/deorali/transformer.png",
      },
    },
  },
};
