import { CourtEntity } from "../entities/court.entity";

export interface ICourtRepository {
    create(court: CourtEntity): Promise<CourtEntity | null>;
    findByUid(uid: string): Promise<CourtEntity | null>;
    findByName(name: string): Promise<CourtEntity | null>;
    findByType(type: string): Promise<CourtEntity | null>;
}