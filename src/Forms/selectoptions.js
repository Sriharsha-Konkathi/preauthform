export function selectvalues(){
    $(document).ready(function () {
 
        var list1 = document.getElementById('firstList');
         
        list1.options[0] = new Option('--Select--', '');
        list1.options[1] = new Option('Snacks', 'Snacks');
        list1.options[2] = new Option('Drinks', 'Drinks');
    });

    function getFoodItem(){
 
        var list1 = document.getElementById('firstList');
        var list2 = document.getElementById("secondList");
        var list1SelectedValue = list1.options[list1.selectedIndex].value;
         
        if (list1SelectedValue=='Snacks')
        {
             
            list2.options.length=0;
            list2.options[0] = new Option('--Select--', '');
            list2.options[1] = new Option('Burger', 'Burger');
            list2.options[2] = new Option('Pizza', 'Pizza');
            list2.options[3] = new Option('Hotdog', 'Hotdog');
            list2.options[4] = new Option('Potato Chips', 'Potato Chips');
            list2.options[5] = new Option('French Fries', 'French Fries');
             
        }
        else if (list1SelectedValue=='Drinks')
        {
             
            list2.options.length=0;
            list2.options[0] = new Option('--Select--', '');
            list2.options[1] = new Option('Coca Cola', 'Coca Cola');
            list2.options[2] = new Option('7up', '7up');
            list2.options[3] = new Option('Pepsi', 'Pepsi');
            list2.options[4] = new Option('Coffee', 'Coffee');
            list2.options[5] = new Option('Tea', 'Tea');
             
        }
}

}