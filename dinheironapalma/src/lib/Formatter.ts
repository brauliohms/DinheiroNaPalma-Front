export class Formatter {
  public static getDigits(str: string, maxLength?: number) {
    return str.replace(/\D/g, "").slice(0, maxLength);
  }
  public static moneyNumberToDisplay(num: number) {
    return num.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  public static moneyStringToStore(num: string) {
    if (!num) return 0;

    const factor = num.includes(",") ? 1 : 100;
    const unmasked =
      parseFloat(num.replace(/\./g, "").replace(/,/g, ".")) / factor;
    const decimalPlaces = num.split(",")[1]?.length;

    if (decimalPlaces === 1) return unmasked / 10;
    if (decimalPlaces === 3) return unmasked * 10;
    return unmasked;
  }

  public static formatCNPJToDisplay(cnpj: string) {
    const onlyDigits = Formatter.getDigits(cnpj, 14);

    const length = onlyDigits.length;
    if (length === 11) {
      // Aplica mascara para CPF
      if (length < 3) return cnpj;
      let str = `${onlyDigits.slice(0, 3)}.${onlyDigits.slice(3, 6)}`;
      if (length < 7) return str;
      str += `.${onlyDigits.slice(6, 9)}`;
      if (length < 10) return str;
      return `${str}-${onlyDigits.slice(9)}`;
    } else {
      // Aplica mascara para CNPJ
      if (length < 3) return cnpj;

      let str = `${onlyDigits.slice(0, 2)}.${onlyDigits.slice(2, 5)}`;
      if (length < 6) return str;

      str += `.${onlyDigits.slice(5, 8)}`;
      if (length < 9) return str;

      str += `/${onlyDigits.slice(8, 12)}`;
      if (length < 13) return str;

      return `${str}-${onlyDigits.slice(12)}`;
    }
  }
}
