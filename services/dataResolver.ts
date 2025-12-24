import type {
    MaintenanceSection,
    RevenueSection,
    Station,
} from "../config/dataSources";
import { DATA_SOURCES } from "../config/dataSources";

export function getRevenueData(
  station: Station,
  section: RevenueSection
) {
  return DATA_SOURCES[station].revenue[section];
}

export function getMaintenanceData(
  station: Station,
  section: MaintenanceSection
) {
  return DATA_SOURCES[station].maintenance[section];
}
