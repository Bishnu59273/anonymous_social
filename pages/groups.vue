<script setup>
useHead({
  title: "MaskiFY",
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
    <!-- added -->

    <div class="container-fluid p-1 grp_main_body">
      <login />
      <div class="row">
        <div class="col-md-3 text-right user_sidebar">
          <div class="title pb-2 text-center">
            <h3>
              <i></i>
              <span><img src="/logo.png" alt="" class="logo m-0" /></span>
            </h3>
          </div>
          <ul class="navbar-nav sidebar_list">
            <li class="nav-list-item">
              <NuxtLink to="#" class="nav-link">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                    />
                  </svg>
                </i>
                <span style="padding-left: 10px" class="link-text">Home</span>
              </NuxtLink>
            </li>
            <li class="nav-list-item">
              <NuxtLink to="#" class="nav-link">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
                    />
                  </svg>
                </i>
                <span style="padding-left: 10px" class="link-text"
                  >Explore</span
                >
              </NuxtLink>
            </li>
            <li class="nav-list-item">
              <NuxtLink to="/message" class="nav-link">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                  >
                    <g fill="currentColor">
                      <path
                        d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                      />
                      <path
                        d="M5 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                      />
                    </g>
                  </svg>
                </i>
                <span style="padding-left: 10px" class="link-text"
                  >Communication</span
                >
              </NuxtLink>
            </li>
            <li class="nav-list-item">
              <NuxtLink to="#" class="nav-link">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                    />
                  </svg>
                </i>
                <span style="padding-left: 10px" class="link-text"
                  >Profile</span
                >
              </NuxtLink>
            </li>
            <li class="nav-list-item">
              <NuxtLink to="#" class="nav-link">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M15 14s1 0 1-1s-1-4-5-4s-5 3-5 4s1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276c.593.69.758 1.457.76 1.72l-.008.002l-.014.002zM11 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904c.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724c.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                    />
                  </svg>
                </i>
                <span style="padding-left: 10px" class="link-text"
                  >Communities</span
                >
              </NuxtLink>
            </li>
            <li class="nav-list-item">
              <NuxtLink to="#" class="nav-link">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742c-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"
                    />
                  </svg>
                </i>
                <span style="padding-left: 10px" class="link-text">Alerts</span>
              </NuxtLink>
            </li>
            <li class="nav-list-item">
              <NuxtLink to="#" class="nav-link">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                  >
                    <g fill="currentColor">
                      <path
                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492a3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0a2.246 2.246 0 0 1-4.492 0"
                      />
                      <path
                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"
                      />
                    </g>
                  </svg>
                </i>
                <span style="padding-left: 10px" class="link-text"
                  >Settings</span
                >
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-md-6 user_post">
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
                    src="/videos/video1.mp4?url"
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
        <div class="col-md-3 text-center user_sidebar" id="fixed_sidebar_last">
          <ul>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
            <li>link 4</li>
          </ul>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
/* fixed sidebar start */
* {
  margin: 0;
  padding: 0;
}
.grp_main_body {
  background: linear-gradient(to right, #fda5fa, #94ecfc);
}
.user_sidebar {
  position: fixed;
  width: 21%;
  top: 100px;
  bottom: 70px;
  overflow-y: auto;
  overflow: hidden;
  margin-left: 107px;
}
.user_sidebar ul a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 45px;
  font-size: 25px;
  color: rgb(0, 0, 0);
  margin: 10px;
  padding-left: 4px;
  box-sizing: border-box;
}

.sidebar_list li:hover {
  background: #c9c5c5a8;
  border-radius: 25px;
}

#fixed_sidebar_last {
  right: 94px;
  width: 21%;
}

.user_post {
  flex: 1;
  margin-left: 25%;
  margin-right: 25%;
}
/* fixed sidebar end */
.card {
  max-width: 600px;
  margin: 20px auto;
  background: linear-gradient(to right, #fda5fa, #94ecfc);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: #000000;
}
/* Header styles */
.card-header {
  padding: 20px;
  background: #f0f0f0;
  text-align: center;
  border-bottom: 1px solid #000000;
  background: linear-gradient(to right, #fda5fa, #94ecfc);
}
/* Content styles */
.card-content {
  padding: 20px;
}
/* Footer styles */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, #fda5fa, #94ecfc);
  text-align: center;
  border-top: 1px solid #000000;
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
  left: 371px;
}
</style>
