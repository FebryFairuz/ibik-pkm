const ObjTerbaru = [{id:1,name:"Panti Asukan ABC", address:"Jl kutilang berbunyi", description:"", bantuan:"", location:"Bogor Tengah", img:"feed1.png", createdBy:{id:1, name:"Septian Cahyadi", phone:"+62 899-9506-210", isActivated:true} },
                        {id:2,name:"Panti Asukan BCD", address:"Jl anjing menggongong", description:"", bantuan:"", location:"Bogor Barat", img:"feed2.png", createdBy:{id:1, name:"Heru Herlambang", phone:"+62 899-9506-210", isActivated:true} },
                        {id:3,name:"Panti Asukan XYZ", address:"Jl bambu tumpul", description:"", bantuan:"", location:"Bogor Timur", img:"feed1.png", createdBy:{id:1, name:"Bambang Bumbung", phone:"+62 899-9506-210", isActivated:true} }]

const ObjTerdekat = [{id:1,name:"Panti Asukan AAA", address:"Jl kutilang berbunyi", description:"", bantuan:"", location:"Bogor Tengah", img:"feed2.png", createdBy:{id:1, name:"Septian Cahyadi", phone:"+62 899-9506-210", isActivated:true} },
                        {id:2,name:"Panti Asukan BBB", address:"Jl anjing menggongong", description:"", bantuan:"", location:"Bogor Barat", img:"feed1.png", createdBy:{id:1, name:"Heru Herlambang", phone:"+62 899-9506-210", isActivated:true} },
                        {id:3,name:"Panti Asukan XXX", address:"Jl bambu tumpul", description:"", bantuan:"", location:"Bogor Timur", img:"feed2.png", createdBy:{id:1, name:"Bambang Bumbung", phone:"+62 899-9506-210", isActivated:true} }]

const ObjSaran = [{id:1,name:"Panti Asukan DDD", address:"Jl kutilang berbunyi", description:"", bantuan:"", location:"Bogor Tengah", img:"feed1.png", createdBy:{id:1, name:"Septian Cahyadi", phone:"+62 899-9506-210", isActivated:true} },
                        {id:2,name:"Panti Asukan EEE", address:"Jl anjing menggongong", description:"", bantuan:"", location:"Bogor Barat", img:"feed2.png", createdBy:{id:1, name:"Heru Herlambang", phone:"+62 899-9506-210", isActivated:true} },
                        {id:3,name:"Panti Asukan RRR", address:"Jl bambu tumpul", description:"", bantuan:"", location:"Bogor Timur", img:"feed1.png", createdBy:{id:1, name:"Bambang Bumbung", phone:"+62 899-9506-210", isActivated:true} }]


const ObjTempatKasih = {new: ObjTerbaru, near:ObjTerdekat, sugges:ObjSaran };

export default ObjTempatKasih;
