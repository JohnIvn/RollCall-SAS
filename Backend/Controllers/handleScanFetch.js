import temporary from "../Models/temporaryModel.js";

// Cache object to store the last sent data
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
      ],
      raw: true,
    });

    // Convert the current data to a string for comparison
    const currentDataStr = JSON.stringify(scanData);

    // Compare with the cached data
    if (lastScanDataCache !== currentDataStr) {
      // Data has changed, send it and update cache
      ws.send(
        JSON.stringify({
          type: "scan_data",
          data: scanData,
          message: "Scan data retrieved successfully",
        })
      );
      lastScanDataCache = currentDataStr;
    } else {
      // Data hasn't changed, you can optionally send a different message
      // or just do nothing
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
