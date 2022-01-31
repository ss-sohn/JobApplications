Vue.component("primary-options", {
    template: "#primary-option-tpl",
    props: {
        items: [],

    },
    data() {
        return {
        }
    },
    computed: {

    },
    methods: {
        init() {
        },
        hoveringEffect(e) {
            e.target.classList.add("hovering");
        },
        endHoveringEffect(e) {
            e.target.classList.remove("hovering");
        },
        setActive(info, e) {
            this.$parent.currentPrimarySelector=info.sortSelector;
            this.$parent.setActiveTag("primary-option",e);
            this.$parent.setActiveTag("title-option",e);
        },
    },
    mounted() {
        this.init()
    }
});
Vue.component("title-options",{
    template:"#title-option-tpl",
    computed:{
        optionFilter: function(){
            if(this.$parent.currentPrimarySelector==""){return []}
            return this.$parent.filterBySelector(
                this.$parent.workHistory,
                this.$parent.currentPrimarySelector).sort();
        }
    },
    methods: {
        init() {
        },
        hoveringEffect(e) {
            e.target.classList.add("hovering");
        },
        endHoveringEffect(e) {
            e.target.classList.remove("hovering");
        },
        setActive(info, e) {
            this.$parent.setActiveTag("title-option",e);
            this.$parent.currentTitleSelector=info;
        }
    }
})
Vue.component("information-output",{
    template:"#information-output-tpl",
    computed:{
        optionFilter: function(){
            if(this.$parent.currentTitleSelector==""){return []}
            return this.$parent.filterBySelector(
                this.$parent.workHistory,
                "task",
                this.$parent.currentPrimarySelector,
                this.$parent.currentTitleSelector).sort();
        }
    },
    methods: {
        init() {
        },
    }
})
new Vue({
    el: "#app",
    data() {
        return {
            primaryOptions: primaryOptions,
            items: [],
            workHistory: workHistory,
            optionFilter: [],
            currentPrimarySelector: "",
            currentTitleSelector: "",
            currentOptionSelector:"task"
        };
    },
    methods: {
        //Methods that are shared by components
        filterBySelector: function(arrayInput,lookup,limitParameter="",limitValue){
            var cleanInfo=new Set();
            arrayInput.forEach(elem => {
            if(limitParameter=="" 
            || eval("elem."+limitParameter+".trim()")==limitValue
            ){
                cleanInfo.add(eval("elem."+lookup+".trim()"));
                }                        
            });
            //return as array because array is expected
            return Array.from(cleanInfo);
        },
        setActiveTag: function(targetClass,e){
            var allTargets = document.getElementsByClassName(targetClass);
            for (var i = 0; i < allTargets.length; i++) {
                allTargets[i].classList.remove("active-display");
            }
            if(e){
            e.target.classList.add("active-display");
            }
        }
    }
});
