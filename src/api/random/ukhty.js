const axios = require("axios")

module.exports = (app) => {
  // Daftar URL gambar
  const imageUrls = [
    "https://i.top4top.io/p_1932o7e2f0.jpg",
    "https://j.top4top.io/p_1932x82vu1.jpg",
    "https://g.top4top.io/p_19327mzvc0.jpg",
    "https://h.top4top.io/p_19328r6pt1.jpg",
    "https://i.top4top.io/p_1932sxt5c2.jpg",
    "https://b.top4top.io/p_19322f6ue0.jpg",
    "https://c.top4top.io/p_1932p9bcq1.jpg",
    "https://d.top4top.io/p_19320wxt52.jpg",
    "https://b.top4top.io/p_1932m46290.jpg",
    "https://c.top4top.io/p_193277ss81.jpg",
    "https://d.top4top.io/p_1932o4e672.jpg",
    "https://e.top4top.io/p_1932z4e293.jpg",
    "https://f.top4top.io/p_19326ptiu4.jpg",
    "https://g.top4top.io/p_1932dq3rr5.jpg",
    "https://h.top4top.io/p_1932wa40b6.jpg",
    "https://i.top4top.io/p_1932nfvpz7.jpg",
    "https://j.top4top.io/p_1932mzcx98.jpg",
    "https://k.top4top.io/p_1932k1rvv9.jpg",
    "https://b.top4top.io/p_1932rf9ic0.jpg",
    "https://c.top4top.io/p_19323jnd21.jpg",
    "https://d.top4top.io/p_1932dtwmf2.jpg",
    "https://e.top4top.io/p_1932ydeeq3.jpg",
    "https://f.top4top.io/p_1932fh9044.jpg",
    "https://g.top4top.io/p_193222brl5.jpg",
    "https://h.top4top.io/p_1932roxp66.jpg",
    "https://i.top4top.io/p_19320rf5h7.jpg",
    "https://j.top4top.io/p_1932eytwf8.jpg",
    "https://k.top4top.io/p_1932029i39.jpg",
    "https://a.top4top.io/p_1932auifw0.jpg",
    "https://b.top4top.io/p_19324tqmd1.jpg",
    "https://c.top4top.io/p_193222o602.jpg",
    "https://d.top4top.io/p_193212mmr3.jpg",
    "https://e.top4top.io/p_1932kz1r04.jpg",
    "https://f.top4top.io/p_1932w3r815.jpg",
    "https://g.top4top.io/p_1932f2e4e6.jpg",
    "https://h.top4top.io/p_1932gec9f7.jpg",
    "https://i.top4top.io/p_1932sui9g8.jpg",
    "https://j.top4top.io/p_1932kbxy99.jpg",
    "https://f.top4top.io/p_19325oity2.jpg",
    "https://e.top4top.io/p_1932wyo5x0.jpg",
    "https://g.top4top.io/p_193295mpj0.jpg",
    "https://h.top4top.io/p_1932x3b4p1.jpg",
    "https://i.top4top.io/p_1932n22t12.jpg",
    "https://j.top4top.io/p_19328xoqp3.jpg",
    "https://k.top4top.io/p_1932il8al4.jpg",
    "https://l.top4top.io/p_1932dy6cf5.jpg",
    "https://a.top4top.io/p_1932nix266.jpg",
    "https://b.top4top.io/p_19326t9w97.jpg",
    "https://c.top4top.io/p_1932e9d8a8.jpg",
    "https://d.top4top.io/p_1932pv87n9.jpg",
  ]

  app.get("/random/ukhty", async (req, res) => {
    try {
      // Mengambil gambar acak dari array
      const imgUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)]
      const imgResponse = await axios.get(imgUrl, { responseType: "arraybuffer" })
      const imgBuffer = Buffer.from(imgResponse.data)

      res.writeHead(200, {
        "Content-Type": "image/jpeg", // Mengubah tipe konten menjadi jpeg
        "Content-Length": imgBuffer.length,
      })
      res.end(imgBuffer)
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`)
    }
  })
}

