<?php

namespace Database\Seeders;

use App\Models\Specialty;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            'Alergología' => [
                "Pruebas de alergia",
                "Inmunoterapia",
                "Manejo del asma",
            ],
            'Anestesiología' => [
                "Anestesia para cirugía",
                "Manejo del dolor",
                "Opciones de sedación",
            ],
            'Cardiología' => [
                "ECG",
                "Prueba de esfuerzo",
                "Chequeo de salud cardíaca",
            ],
            'Cirugía Bariátrica' => [
                "Cirugía de pérdida de peso",
                "Cirugía metabólica",
                "Asesoramiento nutricional",
            ],
            'Cirugía Cardiovascular' => [
                "Cirugía cardíaca",
                "Cirugía de vasos sanguíneos",
                "Cirugía aórtica",
            ],
            'Cirugía de Columna' => [
                "Cirugía de columna vertebral",
                "Reemplazo de disco",
                "Cirugía de descompresión",
            ],
            'Cirugía de Mano' => [
                "Cirugía de mano",
                "Liberación del túnel carpiano",
                "Reparación de tendones",
            ],
            'Cirugía General' => [
                "Cirugía de vesícula biliar",
                "Apendicectomía",
                "Reparación de hernias",
            ],
            'Cirugía Maxilofacial' => [
                "Cirugía de mandíbula",
                "Reconstrucción facial",
                "Extracción de muelas del juicio",
            ],
            'Cirugía Oncológica' => [
                "Cirugía de cáncer",
                "Extirpación de tumores",
                "Cuidados paliativos",
            ],
            'Cirugía Pediátrica' => [
                "Cirugía pediátrica",
                "Cirugías menores",
                "Cirugía gastrointestinal",
            ],
            'Cirugía Plástica' => [
                "Cirugía estética",
                "Cirugía reconstructiva",
                "Tratamiento de quemaduras",
            ],
            'Cirugía Torácica' => [
                "Cirugía torácica",
                "Cirugía pulmonar",
                "Cirugía de pared torácica",
            ],
            'Coloproctología' => [
                "Cirugía de colon",
                "Cirugía rectal",
                "Cirugía anal",
            ],
            'Cosmiatra' => [
                "Procedimientos cosméticos",
                "Tratamientos de cuidado de la piel",
                "Terapias antienvejecimiento",
            ],
            'Diabetología' => [
                "Manejo de la diabetes",
                "Terapia con insulina",
                "Asesoramiento nutricional",
            ],
            'Ecografista' => [
                "Exámenes de ultrasonido",
                "Ultrasonido prenatal",
                "Ultrasonido abdominal",
            ],
            'Electrofisiólogo' => [
                "Estudios electrofisiológicos",
                "Análisis del ritmo cardíaco",
                "Ablación cardíaca",
            ],
            'Endocrinología' => [
                "Terapia hormonal",
                "Manejo de la diabetes",
                "Tratamiento de la tiroides",
            ],
            'Fisiatría' => [
                "Medicina física",
                "Rehabilitación",
                "Manejo del dolor",
            ],
            'Fisioterapia' => [
                "Fisioterapia",
                "Programas de rehabilitación",
                "Recuperación de lesiones deportivas",
            ],
            'Flebología' => [
                "Tratamientos de venas",
                "Cirugía de venas varicosas",
                "Terapia láser endovenosa",
            ],
            'Foniatría' => [
                "Terapia del habla",
                "Terapia de la voz",
                "Trastornos de la deglución",
            ],
            'Gastroenterología' => [
                "Trastornos gastrointestinales",
                "Endoscopia",
                "Manejo de la hepatitis",
            ],
            'Geriatría' => [
                "Cuidado de ancianos",
                "Manejo de enfermedades crónicas",
                "Evaluación geriátrica",
            ],
            'Ginecología y Obstetricia' => [
                "Exámenes ginecológicos de rutina",
                "Cuidado prenatal",
                "Tratamiento de la menopausia",
            ],
            'Hematología' => [
                "Tratamiento de trastornos sanguíneos",
                "Manejo de la anemia",
                "Manejo de la leucemia",
            ],
            'Infectología' => [
                "Tratamiento de enfermedades infecciosas",
                "Vacunaciones de viaje",
                "Cuidado del VIH",
            ],
            'Laboratorio' => [
                "Análisis de sangre",
                "Análisis de orina",
                "Servicios de biopsia",
            ],
            'Mastología' => [
                "Consulta de salud mamaria",
                "Mamografía",
                "Tratamiento del cáncer de mama",
            ],
            'Medicina Bucomaxilofacial' => [
                "Cirugía oral y maxilofacial",
                "Implantes dentales",
                "Cirugía de mandíbula",
            ],
            'Medicina Estética' => [
                "Tratamientos antienvejecimiento",
                "Rejuvenecimiento de la piel",
                "Procedimientos cosméticos",
            ],
            'Medicina Familiar' => [
                "Atención médica familiar",
                "Cuidado preventivo",
                "Manejo de enfermedades crónicas",
            ],
            'Medicina General' => [
                "Exámenes generales de salud",
                "Tratamiento de enfermedades comunes",
                "Controles de salud",
            ],
            'Medicina Interna' => [
                "Consulta de medicina interna",
                "Manejo de enfermedades crónicas",
                "Cuidado preventivo",
            ],
            'Medicina Ocupacional' => [
                "Evaluaciones de salud ocupacional",
                "Manejo de lesiones laborales",
                "Programas de bienestar",
            ],
            'Medicina Ortomolecular' => [
                "Terapia nutricional",
                "Programas de desintoxicación",
                "Equilibrio hormonal",
            ],
            'Médico Intensivista' => [
                "Manejo de cuidados críticos",
                "Monitoreo intensivo",
                "Cuidados de emergencia",
            ],
            'Nefrología' => [
                "Manejo de enfermedades renales",
                "Tratamiento de diálisis",
                "Manejo de la hipertensión",
            ],
            'Neumología' => [
                "Tratamiento de enfermedades respiratorias",
                "Manejo del asma",
                "Estudios del sueño",
            ],
            'Neurocirugía' => [
                "Cirugía cerebral",
                "Cirugía de columna vertebral",
                "Extirpación de tumores",
            ],
            'Neurología' => [
                "Evaluaciones neurológicas",
                "Manejo del accidente cerebrovascular",
                "Tratamiento de la epilepsia",
            ],
            'Nutrición' => [
                "Asesoramiento dietético",
                "Manejo del peso",
                "Evaluaciones nutricionales",
            ],
            'Nutriología' => [
                "Terapia nutricional",
                "Planificación de dietas",
                "Asesoramiento sobre suplementos",
            ],
            'Odontología' => [
                "Odontología general",
                "Cuidado preventivo",
                "Procedimientos restauradores",
            ],
            'Oftalmología' => [
                "Exámenes oculares",
                "Cirugía de cataratas",
                "Corrección de la visión",
            ],
            'Oncología y Radioterapia' => [
                "Cuidado del cáncer",
                "Quimioterapia",
                "Radioterapia",
            ],
            'Otorrinolaringología' => [
                "Tratamientos de oído, nariz y garganta",
                "Evaluaciones auditivas",
                "Manejo de la apnea del sueño",
            ],
            'Pediatría' => [
                "Controles de salud infantil",
                "Vacunaciones",
                "Monitoreo del crecimiento",
            ],
            'Psicología' => [
                "Asesoramiento de salud mental",
                "Terapia conductual",
                "Evaluaciones psicológicas",
            ],
            'Psiquiatría' => [
                "Evaluaciones psiquiátricas",
                "Manejo de medicamentos",
                "Terapia para trastornos del estado de ánimo",
            ],
            'Radiología' => [
                "Imágenes diagnósticas",
                "Rayos X",
                "Resonancia magnética y tomografía computarizada",
            ],
            'Reumatología' => [
                "Manejo de la artritis",
                "Tratamiento de enfermedades autoinmunes",
                "Manejo del dolor",
            ],
            'Traumatología' => [
                "Tratamiento de fracturas óseas",
                "Cirugía articular",
                "Lesiones deportivas",
            ],
            'Urología' => [
                "Tratamiento de trastornos urológicos",
                "Evaluación de la próstata",
                "Manejo de cálculos renales",
            ],
            'Sexología' => [
                "Asesoramiento de salud sexual",
                "Terapia para la disfunción sexual",
                "Educación y prevención",
            ],
        ];
        foreach ($services as $specialtyTitle => $serviceTitles) {
            // Obtener el ID de la especialidad
            $specialtyId = Specialty::where('title', $specialtyTitle)->first()->id;
            // Preparar los datos para la inserción
            $data = [];
            foreach ($serviceTitles as $title) {
                $data[] = [
                    'specialty_id' => $specialtyId,
                    'title' => $title,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ];
            }
            // Insertar los servicios en la base de datos
            DB::table('services')->insert($data);
        }
    }
}
