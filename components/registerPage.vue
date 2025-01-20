<template>
    <div class="register-page">
        <div class="container">
            <div class="register-card">
                <div class="card-header">
                    <h1>Kayıt Ol</h1>
                </div>
                <form @submit.prevent="register">
                    <div class="form-group">
                        <input v-model="email" type="email" placeholder="E-posta" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <input v-model="password" type="password" placeholder="Şifre" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <input v-model="confirmPassword" type="password" placeholder="Şifreyi Tekrarla"
                            class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Kayıt Ol</button>
                </form>
                <div class="actions">
                    <p>Zaten hesabınız var mı?
                        <nuxt-link to="/TheGirisPage" class="login-link">Giriş Yap</nuxt-link>
                    </p>
                </div>
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from '~/plugins/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: '',
        };
    },
    methods: {
        async register() {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = 'Şifreler uyuşmuyor.';
                return;
            }

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                console.log('Kayıt başarılı:', userCredential.user);
                
            } catch (error) {
                console.error('Kayıt hatası:', error);
                this.errorMessage = 'Kayıt başarısız. Lütfen tekrar deneyin.';

                if (error.code === 'auth/email-already-in-use') {
                    this.errorMessage = 'Bu e-posta adresi zaten kullanımda.';
                } else if (error.code === 'auth/weak-password') {
                    this.errorMessage = 'Şifre çok zayıf, lütfen daha güçlü bir şifre girin.';
                } else {
                    this.errorMessage = 'Bilinmeyen bir hata oluştu. Lütfen tekrar deneyin.';
                }
            }
        }
    }
};
</script>

<style scoped>
.register-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.register-card {
    width: 100%;
}

.card-header h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-control {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.btn {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
}

.btn:hover {
    background-color: #0056b3;
}

.actions {
    text-align: center;
    margin-top: 20px;
}

.login-link {
    color: #007bff;
    text-decoration: none;
}

.login-link:hover {
    text-decoration: underline;
}

.error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
}
</style>