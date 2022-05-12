export class BookFlightDetail{
    public pnr:any;
    public flightNumber: any;
    public userName:any;
    public flightID: any;
    public fromPlaceName: any;
    public toPlaceName: any;
    public flightStartDateTime:any;
    public flightToDateTime: any;
    public no_of_Seats: any;
    public ticketCost: any;
    public discountCouponID: any;
    public finalPrice: any;
    public flightSeatNo: any;

    /**
     *
     */
    constructor(flightNumber:any,userName:any,flightID:any,fromPlaceName:any,toPlaceName:any,flightStartDateTime:any,flightToDateTime: any,no_of_Seats: any,ticketCost:any,discountCouponID: any,flightSeatNo: any) {
        this.flightNumber = flightNumber;
        this.userName = userName;
        this.flightID = flightID;
        this.fromPlaceName = fromPlaceName;
        this.toPlaceName = toPlaceName;
        this.flightStartDateTime = flightStartDateTime;
        this.flightToDateTime = flightToDateTime;
        this.no_of_Seats = no_of_Seats;
        this.ticketCost = ticketCost;
        this.discountCouponID = discountCouponID;
        this.flightSeatNo = flightSeatNo;

    }
        
}