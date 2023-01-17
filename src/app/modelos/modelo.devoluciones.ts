export interface ModelDevolucionesI {
    id: number;
    cantidad: number;
    observacion: string;
    numero_tinas: number;
    fecha: Date;
    fk_tbl_prestamo_tinas_id: number;

}