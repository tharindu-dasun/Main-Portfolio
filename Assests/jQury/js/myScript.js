// hide all content and load slides right to left
// $("#customer").css('display','block');
// $("#item").css('display','none');
// $("#order").css('display','none');
//
// $("#linkCustomer").click(function (){
//     $("#customer").css('display','block');
//     $("#item").css('display','none');
//     $("#order").css('display','none');
// });
//
// $("#linkItem").click(function (){
//     $("#customer").css('display','none');
//     $("#item").css('display','block');
//     $("#order").css('display','none');
// });
// $("#linkOrder").click(function (){
//     $("#customer").css('display','none');
//     $("#item").css('display','none');
//     $("#order").css('display','block');
// });

// add Customer
// $("#btnCus").click(function (){
//     // gather customer information
//     let cusId = $("#txtCusId").val();
//     let cusName = $("#txtCusName").val();
//     let cusAddress = $("#txtCusAddress").val();
//     let cusSalary = $("#txtCusSalary").val();
//
//     console.log(cusId,cusName,cusAddress,cusSalary);
//     console.log(typeof cusId,typeof cusName,typeof cusAddress,typeof cusSalary);
//
//     //set into table
//     let row =`<tr> <th>${cusId}</th> <th>${cusName}</th> <th>${cusAddress}</th> <th>${cusSalary}</th> </tr>`;
//
//     $("#customerTable").append(row);
//
//     console.log(row);
//
//     //bind the event after the row was added
//     $("#customerTable>tr").click(function (){
//         console.log(this);
//     });
//
// });

//add item
// $("#btnItem").click(function (){
//
//     let itemCode = $("#txtCode").val();
//     let itemName = $("#txtItemName").val();
//     let itemQty = $("#txtQty").val();
//     let itemPrice = $("#txtPrice").val();
//
//     console.log(itemCode,itemName,itemQty,itemPrice);
//
//     //set into table
//     let itemRow =`<tr> <th>${itemCode}</th> <th>${itemName}</th> <th>${itemQty}</th> <th>${itemPrice}</th> </tr>`
//     $("#itemTable").append(itemRow);
//
//     //bind the event after the row was added
//     $("itemTable>tr").click(function (){
//         console.log(this);
//
//     });
// });