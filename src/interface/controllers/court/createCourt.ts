import { CourtUseCases } from "../../../application/useCases/CourtUseCases";
import { CourtEntity } from "../../../domain/entities/court.entity";
import { MongoCourtRepository } from "../../../infrastructure/repositories/MongoCourtRepository";
import { v4 as uuidv4 } from "uuid"; // Importa uuid

const courtRepository = new MongoCourtRepository();
const courtUseCases = new CourtUseCases(courtRepository);

export const createCustomer = async (
  data: CourtEntity
): Promise<CourtEntity> => {
  const { name, type, location, settings } = data;
  console.log("llegue al controller");
  const court = await courtUseCases.createCourt({
    uid: uuidv4(),
    name,
    type,
    location,
    settings,
  });
  return court;
};
