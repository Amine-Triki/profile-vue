<template>
  <main>
    <section id="Contact" class="contact-section">
      <div class="container">
        <Heading title="Contact Me" subTitle="Get in touch" />

        <div class="contact-content">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2 class="title">Get in touch</h2>
            <p class="description">
              If you have any questions or proposals, you can simply write to us.
              <br />
              We will answer you as soon as possible.
            </p>

            <div class="info-item">
              <el-icon><User /></el-icon>
              <div>
                <p class="label">Name:</p>
                <p class="value">Amine Triki</p>
              </div>
            </div>

            <div class="info-item">
              <el-icon><Location /></el-icon>
              <div>
                <p class="label">Address:</p>
                <p class="value">Sakiet Ezzit, Sfax, Tunisia</p>
              </div>
            </div>

            <div class="info-item">
              <el-icon><Message /></el-icon>
              <div>
                <p class="label">Email:</p>
                <p class="value">Contact@aminetriki.com.tn</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form">
            <el-form @submit.prevent="handleSubmit" :model="form" label-position="top">
              <div class="row">
                <div class="col">
                  <el-form-item label="First Name">
                    <el-input v-model="form.firstName" placeholder="First Name" />
                  </el-form-item>
                </div>
                <div class="col">
                  <el-form-item label="Last Name">
                    <el-input v-model="form.lastName" placeholder="Last Name" />
                  </el-form-item>
                </div>
              </div>

              <el-form-item label="Email">
                <el-input v-model="form.email" type="email" placeholder="Email" />
              </el-form-item>

              <el-form-item label="Subject">
                <el-input v-model="form.subject" placeholder="Subject" />
              </el-form-item>

              <el-form-item label="Message">
                <el-input v-model="form.message" type="textarea" :rows="4" placeholder="Message" />
              </el-form-item>

              <div class="btn-wrapper">
                <el-button type="primary" class="submit-btn" @click="handleSubmit">
                  Send
                </el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Heading from '@/components/AppHeading.vue'
import { User, Location, Message } from '@element-plus/icons-vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

function handleSubmit() {
  console.log('Form submitted:', form)
  // يمكنك هنا إرسال البيانات عبر Axios أو Fetch
}
</script>

<style scoped>
/* الهيكل العام */
.contact-section {
  text-align: center;
  padding: 60px 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* المحتوى */
.contact-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
}

@media (min-width: 768px) {
  .contact-content {
    flex-direction: row;
  }
}

/* الجزء الأيسر */
.contact-info {
  flex: 1;
  text-align: left;
}

.contact-info .title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.contact-info .description {
  margin-top: 10px;
  line-height: 1.6;
}

.info-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
}

.label {
  font-weight: bold;
}

.value {
  margin-top: 2px;
}

/* الجزء الأيمن */
.contact-form {
  flex: 1;
  text-align: left;
}

.row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.col {
  flex: 1;
  min-width: 200px;
}

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.submit-btn {
  background-color: #aa7a82 !important;
  border-color: #aa7a82 !important;
  border-radius: 6px;
  text-transform: none;
}

.submit-btn:hover {
  background-color: #99666e !important;
  border-color: #99666e !important;
  cursor: default;
}
</style>
