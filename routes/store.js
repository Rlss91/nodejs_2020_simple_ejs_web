const express = require("express");
const authMiddleware = require("../middleware/auth");
const app = require("../app");
const router = express.Router();

let placesarr = [
  {
    id: "0",
    img: "simone-mascellari-ED5PGy5yXhs-unsplash.jpg",
    title: "Temple of Montegrisa, Trieste, Italia",
    disc: "Drone shot of Temple of Montegrisa during sunset",
  },
  {
    id: "7",
    img: "ronan-furuta-jhLHZuvurjM-unsplash.jpg",
    title: "Claiborne Parkway, Ashburn, VA, USA",
    disc: "The Church of Jesus Christ of Latter-day Saints",
  },
  {
    id: "9",
    img: "jonas-ducker-SN5tt-oozVI-unsplash.jpg",
    title: "EcoCamp Patagonia, Torres del Paine, Torres de Paine, Chile",
    disc: "The Church of Jesus Christ of Latter-day Saints",
  },
];

router.use(authMiddleware);

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.query);
  let arr = placesarr;
  if (req.query.q) {
    arr = placesarr.filter((item) => {
      return item.title.search(req.query.q) >= 0;
    });
  }
  res.render("store", {
    title: "Express",
    ...req.nav,
    placesarr: arr,
  });
});

router.get("/:placeid", (req, res) => {
  let place = placesarr.find((elm) => elm.id == req.params.placeid);
  res.render("place_ditales", { ...req.nav, title: place.title, place: place });
});

module.exports = router;
