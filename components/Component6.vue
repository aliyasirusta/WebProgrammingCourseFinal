<template>
  <div class="auth-container">
    <!-- Registration Section -->
    <div class="registration">
      <h2>Kayıt Ol</h2>
      <p>Sadece Koton üyelerine özel fırsatlardan yararlanmak için hemen üye olun.</p>
      <form>
        <div class="form-group">
          <label for="email">Eposta Adresi*</label>
          <input type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="name">Ad*</label>
          <input type="text" id="name" required />
        </div>
        <div class="form-group">
          <label for="surname">Soyad*</label>
          <input type="text" id="surname" required />
        </div>
        <div class="form-group">
          <label for="password">Şifre*</label>
          <input type="password" id="password" required />
        </div>
        <div class="form-group">
          <label for="phone">Telefon Numarası*</label>
          <input type="tel" id="phone" required />
        </div>
        <div class="form-group">
          <label>Doğum Tarihi</label>
          <div class="birth-date">
            <select>
              <option>Gün</option>
              <!-- Add day options -->
            </select>
            <select>
              <option>Ay</option>
              <!-- Add month options -->
            </select>
            <select>
              <option>Yıl</option>
              <!-- Add year options -->
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Cinsiyet</label>
          <div class="gender">
            <input type="radio" id="female" name="gender" />
            <label for="female">Kadın</label>
            <input type="radio" id="male" name="gender" />
            <label for="male">Erkek</label>
          </div>
        </div>
        <div class="form-group">
          <input type="checkbox" id="terms" required />
          <label for="terms">
            Web sitesi üyelik sözleşmesi ile Koton Club üyelik sözleşmelerini okudum, onaylıyorum.
          </label>
        </div>
        <button type="submit" class="submit-btn">KAYIT OL</button>
      </form>
    </div>

    <!-- Login Section -->
    <div class="login">
      <h2>Giriş Yap</h2>
      <form>
        <div class="form-group">
          <label for="login-email">Eposta Adresi*</label>
          <input type="email" id="login-email" required />
        </div>
        <div class="form-group">
          <label for="login-password">Şifre*</label>
          <input type="password" id="login-password" required />
        </div>
        <a href="#">Şifremi Unuttum</a>
        <button type="submit" class="submit-btn">GİRİŞ YAP</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component6",
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
}

.registration,
.login {
  flex: 1;
  background: #f9f9f9;
  padding: 2rem;
  border: 1px solid #ccc;
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.gender {
  display: flex;
  gap: 1rem;
}

.submit-btn {
  background: black;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.submit-btn:hover {
  background: #333;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.birth-date {
  display: flex;
  gap: 0.5rem;
}
</style>
