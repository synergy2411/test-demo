describe("TestModule :: TestController ", function(){
    var controller;
    beforeEach( module("TestModule"));
    beforeEach(inject(function($controller){
            controller = $controller("TestController");
        }));
    it("SHould return boolean",function(){
                
        var item = {id : 1, label : "Some Work", done : false}

        var status = controller.getDone(item);

        expect(status.unfinished).toBeTruthy();
    })

    it("SHould return boolean",function(){
               
        var item = {id : 1, label : "Some Work", done : false}

        var status = controller.getDone(item);

        expect(status.finished).toBeFalsy();
    })

    it("SHould return boolean",function(){
        
        var item = {id : 1, label : "Some Work", done : true}

        var status = controller.getDone(item);

        expect(status.unfinished).toBeFalsy();
    })

    it("SHould return boolean",function(){
        
        var item = {id : 1, label : "Some Work", done : true}

        var status = controller.getDone(item);

        expect(status.finished).toBeTruthy();
    })

    it("Should load data", function(){
       
        expect(controller.items).toEqual([
            {id : 1, label : "Some Work", done : true},
            {id : 2, label : "New Work", done : false}
        ]);

    })

    it("Should be Truthy", function(){
        expect(true).toBeTruthy();
    })

    it("1 should be be 1", function(){
        expect(1).toBe(1);
    })

    it("Should contain Hello", function(){
        var str = "Hello World!";
        expect(str).toContain("Hello");
    })
})