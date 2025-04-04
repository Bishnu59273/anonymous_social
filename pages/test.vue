<script setup>
useHead({
  title: "friends",
});
const card = ref([]);
async function getdetails() {
  const details = ref([
    {
      id: 1,
      username: "user01",
      image: "/logo.png.jpg",
      title: "Remote Collaboration Tools: Transforming Work",
      description:
        "Explore the growing trend of remote work and the role of collaboration tools such as Slack, Microsoft Teams, and Zoom in facilitating seamless communication and productivity among remote teams. Discuss the features, benefits, and challenges of these tools, and provide tips for optimizing remote collaboration experiences.",
    },
    {
      id: 2,
      username: "user02",
      image: "https://unsplash.com/photos/man-siting-facing-laptop-dYEuFB8KQJk",
      title: "Blockchain: Beyond Cryptocurrency",
      description:
        "Dive into the world of blockchain technology beyond its use in cryptocurrency. Explore its potential applications in industries such as supply chain management, healthcare, voting systems, and digital identity verification. Discuss the benefits of blockchain in terms of transparency, security, and decentralization, and highlight real-world examples of blockchain adoption and innovation.",
    },
    {
      id: 3,
      username: "user03",
      image: "/images/post2.jpg",
      title: "Edge Computing: Reshaping IoT",
      description:
        "Explore the concept of edge computing and its significance in the context of the Internet of Things (IoT) and data processing. Discuss how edge technologies enable faster data processing, lower latency, and improved reliability by bringing computational resources closer to the data source. Highlight use cases of edge computing in smart cities, autonomous vehicles, and industrial automation, and discuss its implications for the future of technology infrastructure.",
    },
    {
      id: 4,
      username: "user04",
      image: "/images/banner_1.jpg",
      title: "Ethical AI: Addressing Bias",
      description:
        "Examine the ethical considerations surrounding artificial intelligence and machine learning algorithms, focusing on issues such as bias, fairness, and transparency. Discuss the challenges of ensuring AI systems are free from biases and reflect the diversity of human experiences. Explore strategies for mitigating bias in AI algorithms, such as data preprocessing techniques, algorithmic transparency, and diversity in AI development teams. Highlight the importance of ethical AI practices in building trust and promoting responsible AI adoption.",
    },
  ]);
  card.value = details.value;
}
getdetails();
</script>

<template>
  <NuxtLayout name="footer">
    <div class="container p-2">
      <div class="row">
        <div class="col">
          <login />
          <div v-if="card">
            <!-- post card -->
            <div class="card" v-for="(card, index) in card" :key="index">
              <!-- Header -->
              <div class="card-header">
                <div class="profile-image">
                  <img src="/images/banner_1.jpg" alt="set" />
                </div>
                <span class="user">{{ card.username }}</span>
              </div>
              <!-- Content -->
              <div class="card-content text-center">
                <img
                  src="/public/images/banner_1.jpg"
                  alt="Banner Image"
                  width="100%"
                  class="pb-2"
                />
                <!-- <div class="ratio ratio-16x9">
                  <video
                    src="#"
                    title="YouTube video"
                    autoplay
                    controls
                  ></video>
                </div> -->
                <p>
                  {{ card.title }}
                </p>
                <p>
                  {{ card.description }}
                </p>
              </div>
              <!-- Footer -->
              <div class="card-footer">
                <button class="btn btn-outline-primary btn-sm">
                  Support <i class="bi bi-hand-thumbs-up"></i>
                </button>
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                >
                  Discuss
                  <i class="bi bi-chat-square-quote"></i>
                </button>

                <div
                  class="offcanvas offcanvas-bottom text center w-50"
                  tabindex="-1"
                  id="offcanvasBottom"
                  aria-labelledby="offcanvasBottomLabel"
                >
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">
                      Discussion
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body small">...</div>
                </div>
                <button class="btn btn-outline-primary btn-sm">
                  Share
                  <i class="bi bi-send"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-else class="text-center p-5">
            <p>not found</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
/* Basic styles for the card */
.card {
  max-width: 800px;
  margin: 20px auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
/* Header styles */
.card-header {
  padding: 20px;
  background: #f0f0f0;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
/* Content styles */
.card-content {
  padding: 20px;
}
/* Footer styles */
.card-footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background: #f0f0f0;
  text-align: center;
  border-top: 1px solid #ddd;
}
/* Profile image styles */
.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 auto 20px;
}
.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.user {
  margin-top: 14px;
  margin-left: 10px;
}

.offcanvas.offcanvas-bottom {
  left: 373px;
}
</style>
