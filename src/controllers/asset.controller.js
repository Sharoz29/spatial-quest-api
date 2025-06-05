import * as assetService from "../services/asset.service.js";

export async function placeAsset(req, res) {
  const dto = req.body;
  try {
    const isValid = await assetService.validatePlacement(dto);
    if (!isValid) {
      return res
        .status(400)
        .json({ error: "Invalid location for asset placement" });
    }

    const asset = await assetService.placeAsset(dto);
    res.status(201).json({ message: "Asset placed successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to place asset" });
  }
}

export async function getAssetsByLocation(req, res) {
  const lat = parseFloat(req.query.lat);
  const lon = parseFloat(req.query.lon);

  if (isNaN(lat) || isNaN(lon)) {
    return res.status(400).json({ error: "Invalid coordinates" });
  }

  try {
    const assets = await assetService.getAssetsByLocation(lat, lon);
    res.json(assets);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch assets" });
  }
}
