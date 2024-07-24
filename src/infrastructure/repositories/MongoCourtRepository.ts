import { CourtEntity } from "../../domain/entities/court.entity";
import { ICourtRepository } from "../../domain/interfaces/ICourtRepository";
import CourtModel from "../../infrastructure/models/court.schema";

export class MongoCourtRepository implements ICourtRepository {
    constructor() {
        this.create = this.create.bind(this)
        this.findByUid = this.findByUid.bind(this)
        this.findByName = this.findByName.bind(this)
        this.findByType = this.findByType.bind(this)
    }

    async create(court: CourtEntity): Promise<CourtEntity | null> {
        const newCourt = await CourtModel.create(court)
        return newCourt
    }

    async findByUid(uid: string): Promise<CourtEntity | null> {
        const court = await CourtModel.findOne({ uid })
        return court
    }

    async findByName(name: string): Promise<CourtEntity | null> {
        const court = await CourtModel.findOne({ name })
        return court
    }

    async findByType(type: string): Promise<CourtEntity | null> {
        const court = await CourtModel.findOne({ type })
        return court
    }
}