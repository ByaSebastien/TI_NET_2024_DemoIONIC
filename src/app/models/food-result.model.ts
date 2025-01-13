export interface FoodResult {
  code: string
  product: Product
  status: number
  status_verbose: string
}

export interface Product {
  _id: string
  _keywords: string[]
  abbreviated_product_name_fr: string
  abbreviated_product_name_fr_imported: string
  added_countries_tags: any[]
  additives_n: number
  additives_original_tags: string[]
  additives_tags: string[]
  allergens: string
  allergens_from_ingredients: string
  allergens_from_user: string
  allergens_hierarchy: string[]
  allergens_imported: string
  allergens_lc: string
  allergens_tags: string[]
  amino_acids_prev_tags: any[]
  amino_acids_tags: any[]
  brands: string
  brands_imported: string
  brands_tags: string[]
  carbon_footprint_from_known_ingredients_debug: string
  carbon_footprint_percent_of_known_ingredients: number
  categories: string
  categories_hierarchy: string[]
  categories_lc: string
  categories_old: string
  categories_properties: CategoriesProperties
  categories_properties_tags: string[]
  categories_tags: string[]
  category_properties: CategoryProperties
  checkers_tags: any[]
  ciqual_food_name_tags: string[]
  cities_tags: any[]
  code: string
  codes_tags: string[]
  compared_to_category: string
  complete: number
  completed_t: number
  completeness: number
  conservation_conditions: string
  conservation_conditions_fr: string
  conservation_conditions_fr_imported: string
  correctors_tags: string[]
  countries: string
  countries_beforescanbot: string
  countries_hierarchy: string[]
  countries_imported: string
  countries_lc: string
  countries_tags: string[]
  created_t: number
  creator: string
  customer_service: string
  customer_service_fr: string
  customer_service_fr_imported: string
  data_quality_bugs_tags: any[]
  data_quality_errors_tags: any[]
  data_quality_info_tags: string[]
  data_quality_tags: string[]
  data_quality_warnings_tags: string[]
  data_sources: string
  data_sources_imported: string
  data_sources_tags: string[]
  debug_param_sorted_langs: string[]
  ecoscore_data: EcoscoreData
  ecoscore_grade: string
  ecoscore_score: number
  ecoscore_tags: string[]
  editors: string[]
  editors_tags: string[]
  emb_codes: string
  emb_codes_20141016: string
  emb_codes_orig: string
  emb_codes_tags: any[]
  entry_dates_tags: string[]
  expiration_date: string
  food_groups: string
  food_groups_tags: string[]
  "fruits-vegetables-nuts_100g_estimate": number
  generic_name: string
  generic_name_bg: string
  generic_name_de: string
  generic_name_en: string
  generic_name_eo: string
  generic_name_es: string
  generic_name_fr: string
  generic_name_fr_imported: string
  generic_name_it: string
  generic_name_pl: string
  generic_name_pt: string
  generic_name_sr: string
  id: string
  image_front_small_url: string
  image_front_thumb_url: string
  image_front_url: string
  image_ingredients_small_url: string
  image_ingredients_thumb_url: string
  image_ingredients_url: string
  image_nutrition_small_url: string
  image_nutrition_thumb_url: string
  image_nutrition_url: string
  image_packaging_small_url: string
  image_packaging_thumb_url: string
  image_packaging_url: string
  image_small_url: string
  image_thumb_url: string
  image_url: string
  images: Images
  informers_tags: string[]
  ingredients: Ingredient[]
  ingredients_analysis: IngredientsAnalysis
  ingredients_analysis_tags: string[]
  ingredients_debug: string | undefined[]
  ingredients_from_or_that_may_be_from_palm_oil_n: number
  ingredients_from_palm_oil_n: number
  ingredients_from_palm_oil_tags: any[]
  ingredients_hierarchy: string[]
  ingredients_ids_debug: string[]
  ingredients_lc: string
  ingredients_n: number
  ingredients_n_tags: string[]
  ingredients_non_nutritive_sweeteners_n: number
  ingredients_original_tags: string[]
  ingredients_percent_analysis: number
  ingredients_sweeteners_n: number
  ingredients_tags: string[]
  ingredients_text: string
  ingredients_text_bg: string
  ingredients_text_de: string
  ingredients_text_debug: string
  ingredients_text_en: string
  ingredients_text_eo: string
  ingredients_text_es: string
  ingredients_text_fr: string
  ingredients_text_fr_imported: string
  ingredients_text_it: string
  ingredients_text_nb: string
  ingredients_text_pl: string
  ingredients_text_pt: string
  ingredients_text_sr: string
  ingredients_text_with_allergens: string
  ingredients_text_with_allergens_bg: string
  ingredients_text_with_allergens_de: string
  ingredients_text_with_allergens_en: string
  ingredients_text_with_allergens_es: string
  ingredients_text_with_allergens_fr: string
  ingredients_text_with_allergens_nb: string
  ingredients_text_with_allergens_pl: string
  ingredients_text_with_allergens_pt: string
  ingredients_text_with_allergens_sr: string
  ingredients_that_may_be_from_palm_oil_n: number
  ingredients_that_may_be_from_palm_oil_tags: any[]
  ingredients_with_specified_percent_n: number
  ingredients_with_specified_percent_sum: number
  ingredients_with_unspecified_percent_n: number
  ingredients_with_unspecified_percent_sum: number
  ingredients_without_ciqual_codes: string[]
  ingredients_without_ciqual_codes_n: number
  ingredients_without_ecobalyse_ids: string[]
  ingredients_without_ecobalyse_ids_n: number
  interface_version_created: string
  interface_version_modified: string
  known_ingredients_n: number
  labels: string
  labels_hierarchy: string[]
  labels_lc: string
  labels_old: string
  labels_tags: string[]
  lang: string
  lang_imported: string
  languages: Languages
  languages_codes: LanguagesCodes
  languages_hierarchy: string[]
  languages_tags: string[]
  last_edit_dates_tags: string[]
  last_editor: string
  last_image_dates_tags: string[]
  last_image_t: number
  last_modified_by: string
  last_modified_t: number
  last_updated_t: number
  lc: string
  lc_imported: string
  link: string
  main_countries_tags: any[]
  manufacturing_places: string
  manufacturing_places_tags: string[]
  max_imgid: string
  minerals_prev_tags: any[]
  minerals_tags: any[]
  misc_tags: string[]
  no_nutrition_data: string
  no_nutrition_data_imported: string
  nova_group: number
  nova_group_debug: string
  nova_groups: string
  nova_groups_markers: NovaGroupsMarkers
  nova_groups_tags: string[]
  nucleotides_prev_tags: any[]
  nucleotides_tags: any[]
  nutrient_levels: NutrientLevels
  nutrient_levels_tags: string[]
  nutriments: Nutriments
  nutriments_estimated: NutrimentsEstimated
  nutriscore: Nutriscore
  nutriscore_2021_tags: string[]
  nutriscore_2023_tags: string[]
  nutriscore_data: NutriscoreData
  nutriscore_grade: string
  nutriscore_score: number
  nutriscore_score_opposite: number
  nutriscore_tags: string[]
  nutriscore_version: string
  nutrition_data: string
  nutrition_data_per: string
  nutrition_data_per_imported: string
  nutrition_data_prepared: string
  nutrition_data_prepared_per: string
  nutrition_grade_fr: string
  nutrition_grades: string
  nutrition_grades_tags: string[]
  nutrition_score_beverage: number
  nutrition_score_debug: string
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients: number
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value: number
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number
  nutrition_score_warning_no_fiber: number
  obsolete: string
  obsolete_imported: string
  obsolete_since_date: string
  origin: string
  origin_bg: string
  origin_de: string
  origin_en: string
  origin_eo: string
  origin_es: string
  origin_fr: string
  origin_it: string
  origin_pl: string
  origin_pt: string
  origin_sr: string
  origins: string
  origins_hierarchy: string[]
  origins_lc: string
  origins_old: string
  origins_tags: string[]
  other_nutritional_substances_tags: any[]
  owner: string
  owner_fields: OwnerFields
  owner_imported: string
  owners_tags: string
  packaging: string
  packaging_hierarchy: string[]
  packaging_lc: string
  packaging_materials_tags: string[]
  packaging_old: string
  packaging_old_before_taxonomization: string
  packaging_recycling_tags: string[]
  packaging_shapes_tags: string[]
  packaging_tags: string[]
  packaging_text: string
  packaging_text_bg: string
  packaging_text_de: string
  packaging_text_en: string
  packaging_text_eo: string
  packaging_text_es: string
  packaging_text_fr: string
  packaging_text_it: string
  packaging_text_pl: string
  packaging_text_pt: string
  packaging_text_sr: string
  packagings: Packaging3[]
  packagings_complete: number
  packagings_materials: PackagingsMaterials
  packagings_n: number
  photographers_tags: string[]
  pnns_groups_1: string
  pnns_groups_1_tags: string[]
  pnns_groups_2: string
  pnns_groups_2_tags: string[]
  popularity_key: number
  popularity_tags: string[]
  producer_version_id: string
  producer_version_id_imported: string
  product_name: string
  product_name_bg: string
  product_name_de: string
  product_name_en: string
  product_name_eo: string
  product_name_es: string
  product_name_fr: string
  product_name_fr_imported: string
  product_name_it: string
  product_name_pl: string
  product_name_pt: string
  product_name_sr: string
  product_quantity: string
  product_quantity_unit: string
  product_type: string
  purchase_places: string
  purchase_places_tags: string[]
  quantity: string
  quantity_imported: string
  removed_countries_tags: any[]
  rev: number
  scans_n: number
  selected_images: SelectedImages
  serving_quantity: number
  serving_quantity_unit: string
  serving_size: string
  serving_size_imported: string
  sortkey: number
  sources: Source[]
  sources_fields: SourcesFields
  states: string
  states_hierarchy: string[]
  states_tags: string[]
  stores: string
  stores_tags: string[]
  teams: string
  teams_tags: string[]
  traces: string
  traces_from_ingredients: string
  traces_from_user: string
  traces_hierarchy: string[]
  traces_lc: string
  traces_tags: string[]
  unique_scans_n: number
  unknown_ingredients_n: number
  unknown_nutrients_tags: any[]
  update_key: string
  vitamins_prev_tags: any[]
  vitamins_tags: any[]
  weighers_tags: any[]
}

export interface CategoriesProperties {
  "agribalyse_food_code:en": string
  "agribalyse_proxy_food_code:en": string
  "ciqual_food_code:en": string
}

export interface CategoryProperties {
  "ciqual_food_name:en": string
  "ciqual_food_name:fr": string
}

export interface EcoscoreData {
  adjustments: Adjustments
  agribalyse: Agribalyse
  grade: string
  grades: Grades
  missing: Missing
  missing_data_warning: number
  score: number
  scores: Scores
  status: string
}

export interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients
  packaging: Packaging
  production_system: ProductionSystem
  threatened_species: ThreatenedSpecies
}

export interface OriginsOfIngredients {
  aggregated_origins: AggregatedOrigin[]
  epi_score: number
  epi_value: number
  origins_from_categories: string[]
  origins_from_origins_field: string[]
  transportation_score: number
  transportation_scores: TransportationScores
  transportation_value: number
  transportation_values: TransportationValues
  value: number
  values: Values
}

export interface AggregatedOrigin {
  epi_score: string
  origin: string
  percent: number
  transportation_score: number
}

export interface TransportationScores {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface TransportationValues {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface Values {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number
  packagings: Packaging2[]
  score: number
  value: number
  warning: string
}

export interface Packaging2 {
  environmental_score_material_score: number
  environmental_score_shape_ratio: number
  material: string
  non_recyclable_and_non_biodegradable?: string
  number_of_units?: number
  quantity_per_unit?: string
  quantity_per_unit_unit?: string
  quantity_per_unit_value?: number
  recycling?: string
  shape: string
}

export interface ProductionSystem {
  labels: any[]
  value: number
  warning: string
}

export interface ThreatenedSpecies {
  ingredient: string
  value: number
}

export interface Agribalyse {
  agribalyse_food_code: string
  co2_agriculture: number
  co2_consumption: number
  co2_distribution: number
  co2_packaging: number
  co2_processing: number
  co2_total: number
  co2_transportation: number
  code: string
  dqr: string
  ef_agriculture: number
  ef_consumption: number
  ef_distribution: number
  ef_packaging: number
  ef_processing: number
  ef_total: number
  ef_transportation: number
  is_beverage: number
  name_en: string
  name_fr: string
  score: number
  version: string
}

export interface Grades {
  ad: string
  al: string
  at: string
  ax: string
  ba: string
  be: string
  bg: string
  ch: string
  cy: string
  cz: string
  de: string
  dk: string
  dz: string
  ee: string
  eg: string
  es: string
  fi: string
  fo: string
  fr: string
  gg: string
  gi: string
  gr: string
  hr: string
  hu: string
  ie: string
  il: string
  im: string
  is: string
  it: string
  je: string
  lb: string
  li: string
  lt: string
  lu: string
  lv: string
  ly: string
  ma: string
  mc: string
  md: string
  me: string
  mk: string
  mt: string
  nl: string
  no: string
  pl: string
  ps: string
  pt: string
  ro: string
  rs: string
  se: string
  si: string
  sj: string
  sk: string
  sm: string
  sy: string
  tn: string
  tr: string
  ua: string
  uk: string
  us: string
  va: string
  world: string
  xk: string
}

export interface Missing {
  labels: number
  packagings: number
}

export interface Scores {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface Images {
  "1": N1
  "11": N11
  "12": N12
  "13": N13
  "15": N15
  "16": N16
  "17": N17
  "19": N19
  "2": N2
  "20": N20
  "21": N21
  "22": N22
  "23": N23
  "24": N24
  "25": N25
  "26": N26
  "27": N27
  "28": N28
  "29": N29
  "3": N3
  "30": N30
  "31": N31
  "33": N33
  "34": N34
  "35": N35
  "36": N36
  "37": N37
  "39": N39
  "4": N4
  "40": N40
  "41": N41
  "42": N42
  "43": N43
  "44": N44
  "45": N45
  "46": N46
  "47": N47
  "48": N48
  "49": N49
  "5": N5
  "50": N50
  "51": N51
  "52": N52
  "53": N53
  "54": N54
  "6": N6
  "7": N7
  "8": N8
  "9": N9
  front: Front
  front_bg: FrontBg
  front_en: FrontEn
  front_fr: FrontFr
  front_pl: FrontPl
  front_sr: FrontSr
  ingredients: Ingredients
  ingredients_bg: IngredientsBg
  ingredients_de: IngredientsDe
  ingredients_en: IngredientsEn
  ingredients_fr: IngredientsFr
  ingredients_pl: IngredientsPl
  ingredients_sr: IngredientsSr
  nutrition: Nutrition
  nutrition_bg: NutritionBg
  nutrition_en: NutritionEn
  nutrition_fr: NutritionFr
  nutrition_pl: NutritionPl
  nutrition_sr: NutritionSr
  packaging_bg: PackagingBg
  packaging_en: PackagingEn
  packaging_fr: PackagingFr
}

export interface N1 {
  sizes: Sizes
  uploaded_t: number
  uploader: string
}

export interface Sizes {
  "100": N100
  "400": N400
  full: Full
}

export interface N100 {
  h: number
  w: number
}

export interface N400 {
  h: number
  w: number
}

export interface Full {
  h: number
  w: number
}

export interface N11 {
  sizes: Sizes2
  uploaded_t: string
  uploader: string
}

export interface Sizes2 {
  "100": N1002
  "400": N4002
  full: Full2
}

export interface N1002 {
  h: number
  w: number
}

export interface N4002 {
  h: number
  w: number
}

export interface Full2 {
  h: number
  w: number
}

export interface N12 {
  sizes: Sizes3
  uploaded_t: string
  uploader: string
}

export interface Sizes3 {
  "100": N1003
  "400": N4003
  full: Full3
}

export interface N1003 {
  h: number
  w: number
}

export interface N4003 {
  h: number
  w: number
}

export interface Full3 {
  h: number
  w: number
}

export interface N13 {
  sizes: Sizes4
  uploaded_t: string
  uploader: string
}

export interface Sizes4 {
  "100": N1004
  "400": N4004
  full: Full4
}

export interface N1004 {
  h: number
  w: number
}

export interface N4004 {
  h: number
  w: number
}

export interface Full4 {
  h: number
  w: number
}

export interface N15 {
  sizes: Sizes5
  uploaded_t: string
  uploader: string
}

export interface Sizes5 {
  "100": N1005
  "400": N4005
  full: Full5
}

export interface N1005 {
  h: number
  w: number
}

export interface N4005 {
  h: number
  w: number
}

export interface Full5 {
  h: number
  w: number
}

export interface N16 {
  sizes: Sizes6
  uploaded_t: string
  uploader: string
}

export interface Sizes6 {
  "100": N1006
  "400": N4006
  full: Full6
}

export interface N1006 {
  h: number
  w: number
}

export interface N4006 {
  h: number
  w: number
}

export interface Full6 {
  h: number
  w: number
}

export interface N17 {
  sizes: Sizes7
  uploaded_t: string
  uploader: string
}

export interface Sizes7 {
  "100": N1007
  "400": N4007
  full: Full7
}

export interface N1007 {
  h: number
  w: number
}

export interface N4007 {
  h: number
  w: number
}

export interface Full7 {
  h: number
  w: number
}

export interface N19 {
  sizes: Sizes8
  uploaded_t: number
  uploader: string
}

export interface Sizes8 {
  "100": N1008
  "400": N4008
  full: Full8
}

export interface N1008 {
  h: number
  w: number
}

export interface N4008 {
  h: number
  w: number
}

export interface Full8 {
  h: number
  w: number
}

export interface N2 {
  sizes: Sizes9
  uploaded_t: number
  uploader: string
}

export interface Sizes9 {
  "100": N1009
  "400": N4009
  full: Full9
}

export interface N1009 {
  h: number
  w: number
}

export interface N4009 {
  h: number
  w: number
}

export interface Full9 {
  h: number
  w: number
}

export interface N20 {
  sizes: Sizes10
  uploaded_t: number
  uploader: string
}

export interface Sizes10 {
  "100": N10010
  "400": N40010
  full: Full10
}

export interface N10010 {
  h: number
  w: number
}

export interface N40010 {
  h: number
  w: number
}

export interface Full10 {
  h: number
  w: number
}

export interface N21 {
  sizes: Sizes11
  uploaded_t: number
  uploader: string
}

export interface Sizes11 {
  "100": N10011
  "400": N40011
  full: Full11
}

export interface N10011 {
  h: number
  w: number
}

export interface N40011 {
  h: number
  w: number
}

export interface Full11 {
  h: number
  w: number
}

export interface N22 {
  sizes: Sizes12
  uploaded_t: number
  uploader: string
}

export interface Sizes12 {
  "100": N10012
  "400": N40012
  full: Full12
}

export interface N10012 {
  h: number
  w: number
}

export interface N40012 {
  h: number
  w: number
}

export interface Full12 {
  h: number
  w: number
}

export interface N23 {
  sizes: Sizes13
  uploaded_t: number
  uploader: string
}

export interface Sizes13 {
  "100": N10013
  "400": N40013
  full: Full13
}

export interface N10013 {
  h: number
  w: number
}

export interface N40013 {
  h: number
  w: number
}

export interface Full13 {
  h: number
  w: number
}

export interface N24 {
  sizes: Sizes14
  uploaded_t: number
  uploader: string
}

export interface Sizes14 {
  "100": N10014
  "400": N40014
  full: Full14
}

export interface N10014 {
  h: number
  w: number
}

export interface N40014 {
  h: number
  w: number
}

export interface Full14 {
  h: number
  w: number
}

export interface N25 {
  sizes: Sizes15
  uploaded_t: number
  uploader: string
}

export interface Sizes15 {
  "100": N10015
  "400": N40015
  full: Full15
}

export interface N10015 {
  h: number
  w: number
}

export interface N40015 {
  h: number
  w: number
}

export interface Full15 {
  h: number
  w: number
}

export interface N26 {
  sizes: Sizes16
  uploaded_t: number
  uploader: string
}

export interface Sizes16 {
  "100": N10016
  "400": N40016
  full: Full16
}

export interface N10016 {
  h: number
  w: number
}

export interface N40016 {
  h: number
  w: number
}

export interface Full16 {
  h: number
  w: number
}

export interface N27 {
  sizes: Sizes17
  uploaded_t: number
  uploader: string
}

export interface Sizes17 {
  "100": N10017
  "400": N40017
  full: Full17
}

export interface N10017 {
  h: number
  w: number
}

export interface N40017 {
  h: number
  w: number
}

export interface Full17 {
  h: number
  w: number
}

export interface N28 {
  sizes: Sizes18
  uploaded_t: number
  uploader: string
}

export interface Sizes18 {
  "100": N10018
  "400": N40018
  full: Full18
}

export interface N10018 {
  h: number
  w: number
}

export interface N40018 {
  h: number
  w: number
}

export interface Full18 {
  h: number
  w: number
}

export interface N29 {
  sizes: Sizes19
  uploaded_t: number
  uploader: string
}

export interface Sizes19 {
  "100": N10019
  "400": N40019
  full: Full19
}

export interface N10019 {
  h: number
  w: number
}

export interface N40019 {
  h: number
  w: number
}

export interface Full19 {
  h: number
  w: number
}

export interface N3 {
  sizes: Sizes20
  uploaded_t: number
  uploader: string
}

export interface Sizes20 {
  "100": N10020
  "400": N40020
  full: Full20
}

export interface N10020 {
  h: number
  w: number
}

export interface N40020 {
  h: number
  w: number
}

export interface Full20 {
  h: number
  w: number
}

export interface N30 {
  sizes: Sizes21
  uploaded_t: number
  uploader: string
}

export interface Sizes21 {
  "100": N10021
  "400": N40021
  full: Full21
}

export interface N10021 {
  h: number
  w: number
}

export interface N40021 {
  h: number
  w: number
}

export interface Full21 {
  h: number
  w: number
}

export interface N31 {
  sizes: Sizes22
  uploaded_t: number
  uploader: string
}

export interface Sizes22 {
  "100": N10022
  "400": N40022
  full: Full22
}

export interface N10022 {
  h: number
  w: number
}

export interface N40022 {
  h: number
  w: number
}

export interface Full22 {
  h: number
  w: number
}

export interface N33 {
  sizes: Sizes23
  uploaded_t: number
  uploader: string
}

export interface Sizes23 {
  "100": N10023
  "400": N40023
  full: Full23
}

export interface N10023 {
  h: number
  w: number
}

export interface N40023 {
  h: number
  w: number
}

export interface Full23 {
  h: number
  w: number
}

export interface N34 {
  sizes: Sizes24
  uploaded_t: number
  uploader: string
}

export interface Sizes24 {
  "100": N10024
  "400": N40024
  full: Full24
}

export interface N10024 {
  h: number
  w: number
}

export interface N40024 {
  h: number
  w: number
}

export interface Full24 {
  h: number
  w: number
}

export interface N35 {
  sizes: Sizes25
  uploaded_t: number
  uploader: string
}

export interface Sizes25 {
  "100": N10025
  "400": N40025
  full: Full25
}

export interface N10025 {
  h: number
  w: number
}

export interface N40025 {
  h: number
  w: number
}

export interface Full25 {
  h: number
  w: number
}

export interface N36 {
  sizes: Sizes26
  uploaded_t: number
  uploader: string
}

export interface Sizes26 {
  "100": N10026
  "400": N40026
  full: Full26
}

export interface N10026 {
  h: number
  w: number
}

export interface N40026 {
  h: number
  w: number
}

export interface Full26 {
  h: number
  w: number
}

export interface N37 {
  sizes: Sizes27
  uploaded_t: number
  uploader: string
}

export interface Sizes27 {
  "100": N10027
  "400": N40027
  full: Full27
}

export interface N10027 {
  h: number
  w: number
}

export interface N40027 {
  h: number
  w: number
}

export interface Full27 {
  h: number
  w: number
}

export interface N39 {
  sizes: Sizes28
  uploaded_t: number
  uploader: string
}

export interface Sizes28 {
  "100": N10028
  "400": N40028
  full: Full28
}

export interface N10028 {
  h: number
  w: number
}

export interface N40028 {
  h: number
  w: number
}

export interface Full28 {
  h: number
  w: number
}

export interface N4 {
  sizes: Sizes29
  uploaded_t: number
  uploader: string
}

export interface Sizes29 {
  "100": N10029
  "400": N40029
  full: Full29
}

export interface N10029 {
  h: number
  w: number
}

export interface N40029 {
  h: number
  w: number
}

export interface Full29 {
  h: number
  w: number
}

export interface N40 {
  sizes: Sizes30
  uploaded_t: number
  uploader: string
}

export interface Sizes30 {
  "100": N10030
  "400": N40030
  full: Full30
}

export interface N10030 {
  h: number
  w: number
}

export interface N40030 {
  h: number
  w: number
}

export interface Full30 {
  h: number
  w: number
}

export interface N41 {
  sizes: Sizes31
  uploaded_t: number
  uploader: string
}

export interface Sizes31 {
  "100": N10031
  "400": N40031
  full: Full31
}

export interface N10031 {
  h: number
  w: number
}

export interface N40031 {
  h: number
  w: number
}

export interface Full31 {
  h: number
  w: number
}

export interface N42 {
  sizes: Sizes32
  uploaded_t: number
  uploader: string
}

export interface Sizes32 {
  "100": N10032
  "400": N40032
  full: Full32
}

export interface N10032 {
  h: number
  w: number
}

export interface N40032 {
  h: number
  w: number
}

export interface Full32 {
  h: number
  w: number
}

export interface N43 {
  sizes: Sizes33
  uploaded_t: number
  uploader: string
}

export interface Sizes33 {
  "100": N10033
  "400": N40033
  full: Full33
}

export interface N10033 {
  h: number
  w: number
}

export interface N40033 {
  h: number
  w: number
}

export interface Full33 {
  h: number
  w: number
}

export interface N44 {
  sizes: Sizes34
  uploaded_t: number
  uploader: string
}

export interface Sizes34 {
  "100": N10034
  "400": N40034
  full: Full34
}

export interface N10034 {
  h: number
  w: number
}

export interface N40034 {
  h: number
  w: number
}

export interface Full34 {
  h: number
  w: number
}

export interface N45 {
  sizes: Sizes35
  uploaded_t: number
  uploader: string
}

export interface Sizes35 {
  "100": N10035
  "400": N40035
  full: Full35
}

export interface N10035 {
  h: number
  w: number
}

export interface N40035 {
  h: number
  w: number
}

export interface Full35 {
  h: number
  w: number
}

export interface N46 {
  sizes: Sizes36
  uploaded_t: number
  uploader: string
}

export interface Sizes36 {
  "100": N10036
  "400": N40036
  full: Full36
}

export interface N10036 {
  h: number
  w: number
}

export interface N40036 {
  h: number
  w: number
}

export interface Full36 {
  h: number
  w: number
}

export interface N47 {
  sizes: Sizes37
  uploaded_t: number
  uploader: string
}

export interface Sizes37 {
  "100": N10037
  "400": N40037
  full: Full37
}

export interface N10037 {
  h: number
  w: number
}

export interface N40037 {
  h: number
  w: number
}

export interface Full37 {
  h: number
  w: number
}

export interface N48 {
  sizes: Sizes38
  uploaded_t: number
  uploader: string
}

export interface Sizes38 {
  "100": N10038
  "400": N40038
  full: Full38
}

export interface N10038 {
  h: number
  w: number
}

export interface N40038 {
  h: number
  w: number
}

export interface Full38 {
  h: number
  w: number
}

export interface N49 {
  sizes: Sizes39
  uploaded_t: number
  uploader: string
}

export interface Sizes39 {
  "100": N10039
  "400": N40039
  full: Full39
}

export interface N10039 {
  h: number
  w: number
}

export interface N40039 {
  h: number
  w: number
}

export interface Full39 {
  h: number
  w: number
}

export interface N5 {
  sizes: Sizes40
  uploaded_t: number
  uploader: string
}

export interface Sizes40 {
  "100": N10040
  "400": N40040
  full: Full40
}

export interface N10040 {
  h: number
  w: number
}

export interface N40040 {
  h: number
  w: number
}

export interface Full40 {
  h: number
  w: number
}

export interface N50 {
  sizes: Sizes41
  uploaded_t: number
  uploader: string
}

export interface Sizes41 {
  "100": N10041
  "400": N40041
  full: Full41
}

export interface N10041 {
  h: number
  w: number
}

export interface N40041 {
  h: number
  w: number
}

export interface Full41 {
  h: number
  w: number
}

export interface N51 {
  sizes: Sizes42
  uploaded_t: number
  uploader: string
}

export interface Sizes42 {
  "100": N10042
  "400": N40042
  full: Full42
}

export interface N10042 {
  h: number
  w: number
}

export interface N40042 {
  h: number
  w: number
}

export interface Full42 {
  h: number
  w: number
}

export interface N52 {
  sizes: Sizes43
  uploaded_t: number
  uploader: string
}

export interface Sizes43 {
  "100": N10043
  "400": N40043
  full: Full43
}

export interface N10043 {
  h: number
  w: number
}

export interface N40043 {
  h: number
  w: number
}

export interface Full43 {
  h: number
  w: number
}

export interface N53 {
  sizes: Sizes44
  uploaded_t: number
  uploader: string
}

export interface Sizes44 {
  "100": N10044
  "400": N40044
  full: Full44
}

export interface N10044 {
  h: number
  w: number
}

export interface N40044 {
  h: number
  w: number
}

export interface Full44 {
  h: number
  w: number
}

export interface N54 {
  sizes: Sizes45
  uploaded_t: number
  uploader: string
}

export interface Sizes45 {
  "100": N10045
  "400": N40045
  full: Full45
}

export interface N10045 {
  h: number
  w: number
}

export interface N40045 {
  h: number
  w: number
}

export interface Full45 {
  h: number
  w: number
}

export interface N6 {
  sizes: Sizes46
  uploaded_t: number
  uploader: string
}

export interface Sizes46 {
  "100": N10046
  "400": N40046
  full: Full46
}

export interface N10046 {
  h: number
  w: number
}

export interface N40046 {
  h: number
  w: number
}

export interface Full46 {
  h: number
  w: number
}

export interface N7 {
  sizes: Sizes47
  uploaded_t: string
  uploader: string
}

export interface Sizes47 {
  "100": N10047
  "400": N40047
  full: Full47
}

export interface N10047 {
  h: number
  w: number
}

export interface N40047 {
  h: number
  w: number
}

export interface Full47 {
  h: number
  w: number
}

export interface N8 {
  sizes: Sizes48
  uploaded_t: string
  uploader: string
}

export interface Sizes48 {
  "100": N10048
  "400": N40048
  full: Full48
}

export interface N10048 {
  h: number
  w: number
}

export interface N40048 {
  h: number
  w: number
}

export interface Full48 {
  h: number
  w: number
}

export interface N9 {
  sizes: Sizes49
  uploaded_t: string
  uploader: string
}

export interface Sizes49 {
  "100": N10049
  "400": N40049
  full: Full49
}

export interface N10049 {
  h: number
  w: number
}

export interface N40049 {
  h: number
  w: number
}

export interface Full49 {
  h: number
  w: number
}

export interface Front {
  geometry: string
  imgid: string
  normalize: any
  rev: string
  sizes: Sizes50
  white_magic: any
}

export interface Sizes50 {
  "100": N10050
  "200": N200
  "400": N40050
  full: Full50
}

export interface N10050 {
  h: number
  w: number
}

export interface N200 {
  h: number
  w: number
}

export interface N40050 {
  h: number
  w: number
}

export interface Full50 {
  h: number
  w: number
}

export interface FrontBg {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes51
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes51 {
  "100": N10051
  "200": N2002
  "400": N40051
  full: Full51
}

export interface N10051 {
  h: number
  w: number
}

export interface N2002 {
  h: number
  w: number
}

export interface N40051 {
  h: number
  w: number
}

export interface Full51 {
  h: number
  w: number
}

export interface FrontEn {
  angle: number
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: any
  rev: string
  sizes: Sizes52
  white_magic: any
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes52 {
  "100": N10052
  "200": N2003
  "400": N40052
  full: Full52
}

export interface N10052 {
  h: number
  w: number
}

export interface N2003 {
  h: number
  w: number
}

export interface N40052 {
  h: number
  w: number
}

export interface Full52 {
  h: number
  w: number
}

export interface FrontFr {
  angle: number
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes53
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes53 {
  "100": N10053
  "200": N2004
  "400": N40053
  full: Full53
}

export interface N10053 {
  h: number
  w: number
}

export interface N2004 {
  h: number
  w: number
}

export interface N40053 {
  h: number
  w: number
}

export interface Full53 {
  h: number
  w: number
}

export interface FrontPl {
  angle: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes54
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes54 {
  "100": N10054
  "200": N2005
  "400": N40054
  full: Full54
}

export interface N10054 {
  h: number
  w: number
}

export interface N2005 {
  h: number
  w: number
}

export interface N40054 {
  h: number
  w: number
}

export interface Full54 {
  h: number
  w: number
}

export interface FrontSr {
  angle: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes55
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes55 {
  "100": N10055
  "200": N2006
  "400": N40055
  full: Full55
}

export interface N10055 {
  h: number
  w: number
}

export interface N2006 {
  h: number
  w: number
}

export interface N40055 {
  h: number
  w: number
}

export interface Full55 {
  h: number
  w: number
}

export interface Ingredients {
  geometry: string
  imgid: string
  normalize: any
  rev: string
  sizes: Sizes56
  white_magic: any
}

export interface Sizes56 {
  "100": N10056
  "200": N2007
  "400": N40056
  full: Full56
}

export interface N10056 {
  h: number
  w: number
}

export interface N2007 {
  h: number
  w: number
}

export interface N40056 {
  h: number
  w: number
}

export interface Full56 {
  h: number
  w: number
}

export interface IngredientsBg {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes57
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes57 {
  "100": N10057
  "200": N2008
  "400": N40057
  full: Full57
}

export interface N10057 {
  h: number
  w: number
}

export interface N2008 {
  h: number
  w: number
}

export interface N40057 {
  h: number
  w: number
}

export interface Full57 {
  h: number
  w: number
}

export interface IngredientsDe {
  angle: number
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: any
  rev: string
  sizes: Sizes58
  white_magic: any
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes58 {
  "100": N10058
  "200": N2009
  "400": N40058
  full: Full58
}

export interface N10058 {
  h: number
  w: number
}

export interface N2009 {
  h: number
  w: number
}

export interface N40058 {
  h: number
  w: number
}

export interface Full58 {
  h: number
  w: number
}

export interface IngredientsEn {
  angle: number
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: any
  rev: string
  sizes: Sizes59
  white_magic: any
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes59 {
  "100": N10059
  "200": N20010
  "400": N40059
  full: Full59
}

export interface N10059 {
  h: number
  w: number
}

export interface N20010 {
  h: number
  w: number
}

export interface N40059 {
  h: number
  w: number
}

export interface Full59 {
  h: number
  w: number
}

export interface IngredientsFr {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes60
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes60 {
  "100": N10060
  "200": N20011
  "400": N40060
  full: Full60
}

export interface N10060 {
  h: number
  w: number
}

export interface N20011 {
  h: number
  w: number
}

export interface N40060 {
  h: number
  w: number
}

export interface Full60 {
  h: number
  w: number
}

export interface IngredientsPl {
  angle: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes61
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes61 {
  "100": N10061
  "200": N20012
  "400": N40061
  full: Full61
}

export interface N10061 {
  h: number
  w: number
}

export interface N20012 {
  h: number
  w: number
}

export interface N40061 {
  h: number
  w: number
}

export interface Full61 {
  h: number
  w: number
}

export interface IngredientsSr {
  angle: string
  geometry: string
  imgid: string
  normalize: string
  ocr: number
  orientation: string
  rev: string
  sizes: Sizes62
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes62 {
  "100": N10062
  "200": N20013
  "400": N40062
  full: Full62
}

export interface N10062 {
  h: number
  w: number
}

export interface N20013 {
  h: number
  w: number
}

export interface N40062 {
  h: number
  w: number
}

export interface Full62 {
  h: number
  w: number
}

export interface Nutrition {
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes63
  white_magic: any
}

export interface Sizes63 {
  "100": N10063
  "200": N20014
  "400": N40063
  full: Full63
}

export interface N10063 {
  h: number
  w: number
}

export interface N20014 {
  h: number
  w: number
}

export interface N40063 {
  h: number
  w: number
}

export interface Full63 {
  h: number
  w: number
}

export interface NutritionBg {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes64
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes64 {
  "100": N10064
  "200": N20015
  "400": N40064
  full: Full64
}

export interface N10064 {
  h: number
  w: number
}

export interface N20015 {
  h: number
  w: number
}

export interface N40064 {
  h: number
  w: number
}

export interface Full64 {
  h: number
  w: number
}

export interface NutritionEn {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes65
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes65 {
  "100": N10065
  "200": N20016
  "400": N40065
  full: Full65
}

export interface N10065 {
  h: number
  w: number
}

export interface N20016 {
  h: number
  w: number
}

export interface N40065 {
  h: number
  w: number
}

export interface Full65 {
  h: number
  w: number
}

export interface NutritionFr {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes66
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes66 {
  "100": N10066
  "200": N20017
  "400": N40066
  full: Full66
}

export interface N10066 {
  h: number
  w: number
}

export interface N20017 {
  h: number
  w: number
}

export interface N40066 {
  h: number
  w: number
}

export interface Full66 {
  h: number
  w: number
}

export interface NutritionPl {
  angle: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes67
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes67 {
  "100": N10067
  "200": N20018
  "400": N40067
  full: Full67
}

export interface N10067 {
  h: number
  w: number
}

export interface N20018 {
  h: number
  w: number
}

export interface N40067 {
  h: number
  w: number
}

export interface Full67 {
  h: number
  w: number
}

export interface NutritionSr {
  angle: string
  geometry: string
  imgid: string
  normalize: string
  ocr: number
  orientation: string
  rev: string
  sizes: Sizes68
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes68 {
  "100": N10068
  "200": N20019
  "400": N40068
  full: Full68
}

export interface N10068 {
  h: number
  w: number
}

export interface N20019 {
  h: number
  w: number
}

export interface N40068 {
  h: number
  w: number
}

export interface Full68 {
  h: number
  w: number
}

export interface PackagingBg {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes69
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes69 {
  "100": N10069
  "200": N20020
  "400": N40069
  full: Full69
}

export interface N10069 {
  h: number
  w: number
}

export interface N20020 {
  h: number
  w: number
}

export interface N40069 {
  h: number
  w: number
}

export interface Full69 {
  h: number
  w: number
}

export interface PackagingEn {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes70
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes70 {
  "100": N10070
  "200": N20021
  "400": N40070
  full: Full70
}

export interface N10070 {
  h: number
  w: number
}

export interface N20021 {
  h: number
  w: number
}

export interface N40070 {
  h: number
  w: number
}

export interface Full70 {
  h: number
  w: number
}

export interface PackagingFr {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes71
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes71 {
  "100": N10071
  "200": N20022
  "400": N40071
  full: Full71
}

export interface N10071 {
  h: number
  w: number
}

export interface N20022 {
  h: number
  w: number
}

export interface N40071 {
  h: number
  w: number
}

export interface Full71 {
  h: number
  w: number
}

export interface Ingredient {
  ciqual_food_code?: string
  id: string
  ingredients?: Ingredient2[]
  is_in_taxonomy: number
  percent_estimate: number
  percent_max: any
  percent_min: number
  text: string
  vegan?: string
  vegetarian?: string
  ciqual_proxy_food_code?: string
  ecobalyse_code?: string
  from_palm_oil?: string
}

export interface Ingredient2 {
  id: string
  is_in_taxonomy: number
  percent_estimate: number
  percent_max: number
  percent_min: number
  text: string
  vegan?: string
  vegetarian?: string
  ciqual_food_code?: string
  ciqual_proxy_food_code?: string
  ecobalyse_code?: string
  from_palm_oil?: string
  ingredients?: Ingredient3[]
}

export interface Ingredient3 {
  id: string
  is_in_taxonomy: number
  percent_estimate: number
  percent_max: number
  percent_min: number
  text: string
  vegan: string
  vegetarian: string
}

export interface IngredientsAnalysis {
  "en:non-vegan": string[]
  "en:palm-oil": string[]
  "en:vegan-status-unknown": string[]
  "en:vegetarian-status-unknown": string[]
}

export interface Languages {
  "en:bokmal": number
  "en:bulgarian": number
  "en:english": number
  "en:french": number
  "en:german": number
  "en:polish": number
  "en:portuguese": number
  "en:serbian": number
  "en:spanish": number
}

export interface LanguagesCodes {
  bg: number
  de: number
  en: number
  es: number
  fr: number
  nb: number
  pl: number
  pt: number
  sr: number
}

export interface NovaGroupsMarkers {
  "3": string[][]
  "4": string[][]
}

export interface NutrientLevels {
  fat: string
  salt: string
  "saturated-fat": string
  sugars: string
}

export interface Nutriments {
  carbohydrates: number
  carbohydrates_100g: number
  carbohydrates_serving: number
  carbohydrates_unit: string
  carbohydrates_value: number
  "carbon-footprint-from-known-ingredients_100g": number
  "carbon-footprint-from-known-ingredients_product": number
  "carbon-footprint-from-known-ingredients_serving": number
  energy: number
  "energy-kcal": number
  "energy-kcal_100g": number
  "energy-kcal_serving": number
  "energy-kcal_unit": string
  "energy-kcal_value": number
  "energy-kcal_value_computed": number
  "energy-kj": number
  "energy-kj_100g": number
  "energy-kj_serving": number
  "energy-kj_unit": string
  "energy-kj_value": number
  "energy-kj_value_computed": number
  energy_100g: number
  energy_serving: number
  energy_unit: string
  energy_value: number
  fat: number
  fat_100g: number
  fat_serving: number
  fat_unit: string
  fat_value: number
  "fruits-vegetables-legumes-estimate-from-ingredients_100g": number
  "fruits-vegetables-legumes-estimate-from-ingredients_serving": number
  "fruits-vegetables-nuts-estimate-from-ingredients_100g": number
  "fruits-vegetables-nuts-estimate-from-ingredients_serving": number
  "nova-group": number
  "nova-group_100g": number
  "nova-group_serving": number
  "nutrition-score-fr": number
  "nutrition-score-fr_100g": number
  proteins: number
  proteins_100g: number
  proteins_serving: number
  proteins_unit: string
  proteins_value: number
  salt: number
  salt_100g: number
  salt_serving: number
  salt_unit: string
  salt_value: number
  "saturated-fat": number
  "saturated-fat_100g": number
  "saturated-fat_serving": number
  "saturated-fat_unit": string
  "saturated-fat_value": number
  sodium: number
  sodium_100g: number
  sodium_serving: number
  sodium_unit: string
  sodium_value: number
  sugars: number
  sugars_100g: number
  sugars_serving: number
  sugars_unit: string
  sugars_value: number
}

export interface NutrimentsEstimated {
  alcohol_100g: number
  "beta-carotene_100g": number
  calcium_100g: number
  carbohydrates_100g: number
  cholesterol_100g: number
  copper_100g: number
  "energy-kcal_100g": number
  "energy-kj_100g": number
  energy_100g: number
  fat_100g: number
  fiber_100g: number
  fructose_100g: number
  galactose_100g: number
  glucose_100g: number
  iodine_100g: number
  iron_100g: number
  lactose_100g: number
  magnesium_100g: number
  maltose_100g: number
  manganese_100g: number
  "pantothenic-acid_100g": number
  phosphorus_100g: number
  phylloquinone_100g: number
  polyols_100g: number
  potassium_100g: number
  proteins_100g: number
  salt_100g: number
  "saturated-fat_100g": number
  selenium_100g: number
  sodium_100g: number
  starch_100g: number
  sucrose_100g: number
  sugars_100g: number
  "vitamin-a_100g": number
  "vitamin-b12_100g": number
  "vitamin-b1_100g": number
  "vitamin-b2_100g": number
  "vitamin-b6_100g": number
  "vitamin-b9_100g": number
  "vitamin-c_100g": number
  "vitamin-d_100g": number
  "vitamin-e_100g": number
  "vitamin-pp_100g": number
  water_100g: number
  zinc_100g: number
}

export interface Nutriscore {
  "2021": N2021
  "2023": N2023
}

export interface N2021 {
  category_available: number
  data: Data
  grade: string
  nutrients_available: number
  nutriscore_applicable: number
  nutriscore_computed: number
  score: number
}

export interface Data {
  energy: number
  energy_points: number
  energy_value: number
  fiber: number
  fiber_points: number
  fiber_value: number
  fruits_vegetables_nuts_colza_walnut_olive_oils: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number
  is_beverage: number
  is_cheese: number
  is_fat: number
  is_water: number
  negative_points: number
  positive_points: number
  proteins: number
  proteins_points: number
  proteins_value: number
  saturated_fat: number
  saturated_fat_points: number
  saturated_fat_value: number
  sodium: number
  sodium_points: number
  sodium_value: number
  sugars: number
  sugars_points: number
  sugars_value: number
}

export interface N2023 {
  category_available: number
  data: Data2
  grade: string
  nutrients_available: number
  nutriscore_applicable: number
  nutriscore_computed: number
  score: number
}

export interface Data2 {
  components: Components
  count_proteins: number
  count_proteins_reason: string
  is_beverage: number
  is_cheese: number
  is_fat_oil_nuts_seeds: number
  is_red_meat_product: number
  is_water: number
  negative_points: number
  negative_points_max: number
  positive_nutrients: string[]
  positive_points: number
  positive_points_max: number
}

export interface Components {
  negative: Negative[]
  positive: Positive[]
}

export interface Negative {
  id: string
  points: number
  points_max: number
  unit: string
  value: number
}

export interface Positive {
  id: string
  points: number
  points_max: number
  unit: string
  value?: number
}

export interface NutriscoreData {
  components: Components2
  count_proteins: number
  count_proteins_reason: string
  grade: string
  is_beverage: number
  is_cheese: number
  is_fat_oil_nuts_seeds: number
  is_red_meat_product: number
  is_water: number
  negative_points: number
  negative_points_max: number
  positive_nutrients: string[]
  positive_points: number
  positive_points_max: number
  score: number
}

export interface Components2 {
  negative: Negative2[]
  positive: Positive2[]
}

export interface Negative2 {
  id: string
  points: number
  points_max: number
  unit: string
  value: number
}

export interface Positive2 {
  id: string
  points: number
  points_max: number
  unit: string
  value?: number
}

export interface OwnerFields {
  abbreviated_product_name_fr: number
  allergens: number
  brands: number
  carbohydrates: number
  conservation_conditions_fr: number
  countries: number
  customer_service_fr: number
  data_sources: number
  energy: number
  "energy-kcal": number
  "energy-kj": number
  fat: number
  generic_name_fr: number
  ingredients_text_fr: number
  lang: number
  lc: number
  no_nutrition_data: number
  nutrition_data_per: number
  obsolete: number
  owner: number
  producer_version_id: number
  product_name_fr: number
  proteins: number
  quantity: number
  salt: number
  "saturated-fat": number
  serving_size: number
  sodium: number
  sugars: number
}

export interface Packaging3 {
  material?: string
  number_of_units?: number
  quantity_per_unit?: string
  quantity_per_unit_unit?: string
  quantity_per_unit_value?: number
  recycling?: string
  shape: string
}

export interface PackagingsMaterials {
  all: All
  "en:plastic": EnPlastic
  "en:unknown": EnUnknown
}

export interface All {}

export interface EnPlastic {}

export interface EnUnknown {}

export interface SelectedImages {
  front: Front2
  ingredients: Ingredients2
  nutrition: Nutrition2
  packaging: Packaging4
}

export interface Front2 {
  display: Display
  small: Small
  thumb: Thumb
}

export interface Display {
  bg: string
  en: string
  fr: string
  pl: string
  sr: string
}

export interface Small {
  bg: string
  en: string
  fr: string
  pl: string
  sr: string
}

export interface Thumb {
  bg: string
  en: string
  fr: string
  pl: string
  sr: string
}

export interface Ingredients2 {
  display: Display2
  small: Small2
  thumb: Thumb2
}

export interface Display2 {
  bg: string
  de: string
  en: string
  fr: string
  pl: string
  sr: string
}

export interface Small2 {
  bg: string
  de: string
  en: string
  fr: string
  pl: string
  sr: string
}

export interface Thumb2 {
  bg: string
  de: string
  en: string
  fr: string
  pl: string
  sr: string
}

export interface Nutrition2 {
  display: Display3
  small: Small3
  thumb: Thumb3
}

export interface Display3 {
  bg: string
  en: string
  fr: string
  pl: string
  sr: string
}

export interface Small3 {
  bg: string
  en: string
  fr: string
  pl: string
  sr: string
}

export interface Thumb3 {
  bg: string
  en: string
  fr: string
  pl: string
  sr: string
}

export interface Packaging4 {
  display: Display4
  small: Small4
  thumb: Thumb4
}

export interface Display4 {
  bg: string
  en: string
  fr: string
}

export interface Small4 {
  bg: string
  en: string
  fr: string
}

export interface Thumb4 {
  bg: string
  en: string
  fr: string
}

export interface Source {
  fields: string[]
  id: string
  images: any[]
  import_t: number
  manufacturer: any
  name: string
  source_licence?: string
  source_licence_url?: string
  url?: string
}

export interface SourcesFields {
  "org-gs1": OrgGs1
}

export interface OrgGs1 {
  gln: string
  gpcCategoryCode: string
  gpcCategoryName: string
  isAllergenRelevantDataProvided: string
  lastChangeDateTime: string
  partyName: string
  productionVariantDescription: string
  publicationDateTime: string
}
