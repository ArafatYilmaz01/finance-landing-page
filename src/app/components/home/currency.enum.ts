export const CurrencyFormats: currencyFormatInterface[] = [
    {
        name: 'United Kingdom',
        code: 'GBP',
        unit: 'British Pound',
        value: 0
    },
    {
        name: 'United States',
        code: 'USD',
        unit: 'US Dollar',
        value: 0
    },
    {
        name: 'Euro',
        code: 'EUR',
        unit: 'Euro',
        value: 0
    }
];

export interface currencyFormatInterface {
    name?: string;
    code?: string;
    unit?: string;
    value?: number;
}