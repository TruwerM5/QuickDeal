import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
    state: () => {
        return {
            tasks: JSON.parse(localStorage.getItem('tasks')) || [],
            errorMsg: '',
            currentKey: localStorage.getItem('key')
        }
    },
    getters: {
        getCount: (state) => state.tasks.length
    },
    actions: {
        addItem(key, text) {
            if(!text.length) {
                this.errorMsg = 'Введите задачу';
                return;
            }
            this.tasks.push({key, text});
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            localStorage.setItem('key', key+1);
            console.log(localStorage);
            this.errorMsg = '';
        },
        removeTask(key) {
            console.log(key);
            console.log(this.tasks);
            this.tasks = this.tasks.filter(item => item.key != key);
            localStorage.removeItem('tasks');
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            localStorage.setItem('key', key+1);
            console.log(localStorage)
        },
        editTask(text, key) {
            console.log(key);
            console.log(this.tasks)

            this.tasks.forEach(item => {
                if(item.key === key) {
                    item.text = text;
                    console.log('Edited');
                } else {
                    console.log('Not found')
                }
            });
        }
    }
    
})