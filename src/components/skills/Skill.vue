<template>
<div style="display: inline-block" class="dataicon" >
    <popper trigger="hover" :options="{placement: 'bottom', modifiers: { offset: { offset: '0,10px' } }}">
        <div class="popperTip has-text-centered is-size-7">
            <h1>{{skill.name}}</h1>
            <h1>{{skill.description}}</h1>
            <h1 v-if="toLearn">Cost: {{skill.price}} SP</h1>
        </div>
        <div class="dataicon is-flex" slot="reference">
            <figure><img class="iconimage" :src="skill.image"></figure>
        </div>
    </popper>
</div>
</template>

<script>
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/css/vue-popper.css';

export default {
    props: ['skill', 'toLearn'],
    components: {
      'popper': Popper
    }
}
</script>

<style>
.popperTip {
  background: #363636;
  padding: 10px;
  border-radius: 20px;
  width: 150px;
  color: white;
  z-index: 999;
}

.dataicon {
    background: white;
    cursor: pointer;
    margin: 0px 5px 5px 0px;
    justify-content: center;
    align-items: center;        
    width: 40px;
    display: inline-block;
    height: 40px;
}
.iconimage {
   width: 40px;
   height: 40px;
   vertical-align: middle;
}
</style>