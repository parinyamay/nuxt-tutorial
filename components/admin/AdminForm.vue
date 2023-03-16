<template>
    <b-container fluid="md" class="py-2">
        <h2 align="center">{{ header }}</h2>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group label="ชื่อบทความ">
                <b-form-input v-model="form.title" type="text" placeholder="ระบุชื่อบทความ" />
            </b-form-group>
            <b-form-group label="รายละเอียดบทความ">
                <b-form-textarea v-model="form.content" placeholder="ระบุรายละเอียดบทความ" rows="8" />
            </b-form-group>
            <b-form-group label="รูปภาพ (URL)">
                <b-form-input v-model="form.image" type="text" placeholder="รูปภาพ (URL)" />
            </b-form-group>
            <b-form-group label="ผู้เชียน">
                <b-form-input v-model="form.author" type="text" placeholder="ระบุนามปากกา" />
            </b-form-group>

            <b-button type="submit" variant="primary"> บันทึก</b-button>
            <b-button type="reset" variant="danger"> ล้าง</b-button>
        </b-form>
    </b-container>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            header: this.post ? 'แก้ไขบทความ' : 'เขียนบทความ',
            form: this.post
                ? { ...this.post }
                : {
                      title: '',
                      content: '',
                      image: '',
                      author: '',
                  },
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            this.$emit('sendData', this.form)
        },
        onReset(evt) {
            evt.preventDefault()
            this.form.title = ''
            this.form.content = ''
            this.form.image = ''
            this.form.author = ''
        },
    },
}
</script>

<style></style>
