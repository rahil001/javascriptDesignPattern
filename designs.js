(function () {
    // factory method
    function factory() {
        this.createFactoryMethod = function(type) {
            switch (type) {
                case 'salaried':
                    return new Salaried();
                case 'partTime':
                    return new Partime();
                    break;
                default:
            }
        };
    }

    function Salaried(){
        this.salary = '$1000'
    }

    function Partime(){
        this.salary = '$100'
    }

    var obj = new factory().createFactoryMethod('salaried');


    // pubSub Pattern

    function pubSub() {
        let events = {};
            this.on = function(eventname, fn) {
            this.events[eventname] = this.events[eventname] || [];
            this.events[eventname].push(fn);
        }

        this.emit = function(eventname, data) {
            this.events[eventname].forEach((fn)=>{
                fn(data)
            });
        },
        this.off = function(eventname, fn) {
            this.events[eventname].forEach((i)=>{
                if(this.events[eventname][i] === fn){
                    this.events[eventname].splice(i,1);
                    break;
                }
            })
        };

        return {
            on,
            off,
            emit
        }
    }


    // facade pattern


    function facade(name) {
        this.name =name;
    }

    facade.prototype.applyFor = function() {
        var status = 'approved'
        if(! new Bank().getDetails(name)){
            status = 'denied'
        } else if(new Credit().getMinimum(amount)){

        }
    }

    function Bank(name) {
        this.getDetails = function(name, amount) {
            // complex logic ...
            return true;
        }
    }

    function Credit(amount) {
        this.getMinimum = function (amount) {
            //complex logic
        }
    }


    // singleton

    var instance;

    function getInstance(){
        var obj = new Object();
        return obj;
    }

    return function (){

        if(!instance){
            instance = getInstance();
        }
        return instance;
    }
})();
