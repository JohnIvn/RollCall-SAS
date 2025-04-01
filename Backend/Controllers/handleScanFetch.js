import temporary from "../Models/temporaryModel.js";

let lastScanDataCache = null;

export default async function handleScanFetch(ws, data) {
  try {
    const scanData = await temporary.findAll({
      attributes: [
        "temporary_id",
        "userId",
        "first_name",
        "middle_name",
        "last_name",
        "temporary_hex",
        "Day",
        "timein",
        "subject",
        "teacher",
        "room",
        "banned",
        "not_exist",
      ],
      raw: true,
    });

    const currentDataStr = JSON.stringify(scanData);

    if (lastScanDataCache !== currentDataStr) {
      ws.send(
        JSON.stringify({
          type: "scan_data",
          data: scanData,
          message: "Scan data retrieved successfully",
        })
      );
      lastScanDataCache = currentDataStr;
    } else {
      ws.send(
        JSON.stringify({
          type: "scan_data_unchanged",
          message: "Scan data has not changed since last request",
        })
      );
    }
  } catch (error) {
    console.error("Error fetching scan data:", error);
    ws.send(
      JSON.stringify({
        type: "error",
        message: "Failed to fetch scan data",
      })
    );
  }
}
