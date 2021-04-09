/* eslint-disable vue/no-v-model-argument */
<template>
  <div class="absolute top-0 left-0 grid w-screen h-screen bg-main-lighter bg-opacity-50">
    <div class="grid place-items-center">
      <div class="bg-main-main w-1/4 space3 rounded-lg shadow mx-auto">
        <div class="mx-8 mb-4">
          <h3>Create a new Project</h3>
          <hr />
        </div>

        <div class="mx-8 mb-4">
          <p>The new project must have an unique name</p>
          <Input
            id="newProject"
            v-model:value="ProjectName"
            label="Project Name"
            name="newProject"
          />
        </div>
        <div class="flex justify-evenly mx-8">
          <Button id="cancel" label="Cancel" variant="Warning" @click="$emit('close')" />
          <Button id="add" label="Add new project" variant="Success" @click="validateName()" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { searchForName } from '../../utils/db';

export default {
  components: {
    Button,
    Input,
  },
  emits: ['close'],
  data() {
    return {
      ProjectName: '',
    };
  },
  methods: {
    async validateName() {
      if (this.ProjectName !== '') {
        await searchForName(this.ProjectName);
        return this.$emit('close');
      }
      alert('El nombre no puede quedar vacio');
    },
  },
};
</script>
