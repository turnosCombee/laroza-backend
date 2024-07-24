import { CourtEntity } from "../../domain/entities/court.entity";
import { ICourtRepository } from "../../domain/interfaces/ICourtRepository";

export class CourtUseCases {
    constructor(private courtRepository: ICourtRepository) {}

    async createCourt(court: CourtEntity): Promise<CourtEntity> {
        const createdCourt = await this.courtRepository.create(court);
        return createdCourt;
    }

    async getCourtByUid(uid: string): Promise<CourtEntity> {
        const court = await this.courtRepository.findByUid(uid);
        return court;
    }

    async getCourtByName(name: string): Promise<CourtEntity> {
        const court = await this.courtRepository.findByName(name);
        return court;
    }

    async getCourtByType(type: string): Promise<CourtEntity> {
        const court = await this.courtRepository.findByType(type);
        return court;
    }
}