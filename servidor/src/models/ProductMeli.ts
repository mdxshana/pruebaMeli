export interface ProductsMeli {
  query: string;
  results: ProductMeli[];
  filters: filter[];
}

export interface ProductMeli {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: null | string;
  listing_type_id: ListingTypeID;
  permalink: string;
  buying_mode: string;
  site_id: SiteID;
  category_id: string;
  domain_id: DomainID;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: number | null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: ResultTag[];
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  seller_address: SellerAddress;
  address: Address;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: null;
  catalog_listing?: boolean;
  discounts: null;
  promotions: any[];
  inventory_id: null | string;
  variation_id?: string;
  variation_filters?: string[];
  variations_data?: { [key: string]: VariationsDatum };
  official_store_name?: string;
  differential_pricing?: DifferentialPricing;
  pictures?: Piture[];
}

export interface filter {
  id: string;
  name: string;
  type: string;
  values: Value[];
}

export interface Value {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface PathFromRoot {
  name: string;
  id: string;
}

export interface Piture {
  id: string;
  url: string;
}
export interface Address {
  state_id: StateID;
  state_name: StateName;
  city_id: null | string;
  city_name: string;
}

export enum StateID {
  ArB = "AR-B",
  ArC = "AR-C",
}

export enum StateName {
  BuenosAires = "Buenos Aires",
  CapitalFederal = "Capital Federal",
}

export interface Attribute {
  id: ID;
  name: Name;
  value_id: null | string;
  value_name: string;
  attribute_group_id: AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct: Struct | null;
  values: AttributeValue[];
  source: number;
  value_type: ValueType;
}

export enum AttributeGroupID {
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
}

export enum ID {
  AlphanumericModel = "ALPHANUMERIC_MODEL",
  Brand = "BRAND",
  ItemCondition = "ITEM_CONDITION",
  Line = "LINE",
  PackageLength = "PACKAGE_LENGTH",
  PackageWeight = "PACKAGE_WEIGHT",
  Weight = "WEIGHT",
}

export enum Name {
  CondiciónDelÍtem = "Condición del ítem",
  LargoDelPaquete = "Largo del paquete",
  Línea = "Línea",
  Marca = "Marca",
  ModeloAlfanumérico = "Modelo alfanumérico",
  Peso = "Peso",
  PesoDelPaquete = "Peso del paquete",
}

export interface Struct {
  number: number;
  unit: string;
}

export enum ValueType {
  List = "list",
  NumberUnit = "number_unit",
  String = "string",
}

export interface AttributeValue {
  id: null | string;
  name: string;
  struct: Struct | null;
  source: number;
}

export interface DifferentialPricing {
  id: number;
}

export enum DomainID {
  MlaActionFigures = "MLA-ACTION_FIGURES",
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export enum ListingTypeID {
  GoldPro = "gold_pro",
  GoldSpecial = "gold_special",
}

export interface Seller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: Date;
  tags: SellerTag[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: SellerReputation;
  eshop?: Eshop;
}

export interface Eshop {
  eshop_id: number;
  seller: number;
  nick_name: string;
  eshop_status_id: number;
  site_id: SiteID;
  eshop_experience: number;
  eshop_rubro: null;
  eshop_locations: any[];
  eshop_logo_url: string;
}

export enum SiteID {
  Mla = "MLA",
}

export interface SellerReputation {
  level_id: LevelID;
  power_seller_status: PowerSellerStatus | null;
  transactions: Transactions;
  metrics: Metrics;
}

export enum LevelID {
  The5_Green = "5_green",
}

export interface Metrics {
  sales: Sales;
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  cancellations: Cancellations;
}

export interface Cancellations {
  period: CancellationsPeriod;
  rate: number;
  value: number;
  excluded?: Excluded;
}

export interface Excluded {
  real_value: number;
  real_rate: number;
}

export enum CancellationsPeriod {
  The365Days = "365 days",
  The60Days = "60 days",
}

export interface Sales {
  period: CancellationsPeriod;
  completed: number;
}

export enum PowerSellerStatus {
  Gold = "gold",
  Platinum = "platinum",
  Silver = "silver",
}

export interface Transactions {
  canceled: number;
  completed: number;
  period: TransactionsPeriod;
  ratings: Ratings;
  total: number;
}

export enum TransactionsPeriod {
  Historic = "historic",
}

export interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

export enum SellerTag {
  Brand = "brand",
  CreditsOpenMarket = "credits_open_market",
  CreditsPriority4 = "credits_priority_4",
  CreditsProfile = "credits_profile",
  Eshop = "eshop",
  LargeSeller = "large_seller",
  MessagesAsSeller = "messages_as_seller",
  Mshops = "mshops",
  Normal = "normal",
}

export interface SellerAddress {
  comment: string;
  address_line: string;
  zip_code: string;
  id: null;
  latitude: null;
  longitude: null;
  country: Sort;
  state: Sort;
  city: Sort;
}

export interface Shipping {
  logistic_type: LogisticType;
  mode: Mode;
  store_pick_up: boolean;
  free_shipping: boolean;
  tags: ShippingTag[];
  promise: null;
}

export enum LogisticType {
  CrossDocking = "cross_docking",
  Fulfillment = "fulfillment",
  XdDropOff = "xd_drop_off",
}

export enum Mode {
  Me2 = "me2",
}

export enum ShippingTag {
  Fulfillment = "fulfillment",
  MLAChgThresholdAgo22 = "MLA-chg-threshold-ago-22",
  MLAChgThresholdFeb23 = "MLA-chg-threshold-Feb-23",
  MandatoryFreeShipping = "mandatory_free_shipping",
  SelfServiceIn = "self_service_in",
  SelfServiceOut = "self_service_out",
}

export enum ResultTag {
  BestSellerCandidate = "best_seller_candidate",
  CartEligible = "cart_eligible",
  GoodQualityPicture = "good_quality_picture",
  GoodQualityThumbnail = "good_quality_thumbnail",
  ImmediatePayment = "immediate_payment",
  LoyaltyDiscountEligible = "loyalty_discount_eligible",
  ModerationPenalty = "moderation_penalty",
  ShippingGuaranteed = "shipping_guaranteed",
  StandardPriceByChannel = "standard_price_by_channel",
}

export interface VariationsDatum {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  inventory_id?: string;
}

export interface Sort {
  id: null | string;
  name: string;
}
