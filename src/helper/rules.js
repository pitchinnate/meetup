export default {
  email: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  },
  phone: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /(\+[0-9]{1,3})?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; // eslint-disable-line
    return pattern.test(value) || 'Invalid phone number.';
  },
  mac: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return pattern.test(value) || 'Invalid Mac Address. A1:B2:C3:D4:E5:F6';
  },
  zip: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /^[0-9]{5}$/;
    return pattern.test(value) || 'Invalid Zip Code.';
  },
  state: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /^[A-Z]{2}$/;
    return pattern.test(value) || 'Invalid State Code';
  },
  ip: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return pattern.test(value) || 'Invalid IP Address. 255.255.255.255';
  },
  cidr: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))$/;
    return pattern.test(value) || 'Invalid CIDR Address. 255.255.255.255/24';
  },
  url: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/; // eslint-disable-line
    return pattern.test(value) || 'Invalid URL. http://test.com';
  },
  required: value => !!value || 'Required.',
  min: value => (value.length >= 8) || 'Must be at least 8 characters.',
  min2: value => (value.length >= 2) || 'Required.',
  integer: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /^\d+$/;
    return pattern.test(value) || 'Invalid Number.';
  },
  number: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    const pattern = /^-?\d*\.?\d*$/;
    return pattern.test(value) || 'Invalid Number.';
  },
  dma: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    return (value >= 0 && value < 999999) || '1-999999 Valid.';
  },
  geopath: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    return (value >= 0 && value < 9999999999) || '0-9999999999 Valid.';
  },
  quividi: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    return (value >= 0 && value < 9999) || '0-9999 Valid.';
  },
  latitude: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    return (value >= -90 && value <= 90) || '-90 to 90 Valid.';
  },
  longitude: (value) => {
    if (value === '' || value === undefined || value === null) return true;
    return (value >= -180 && value <= 180) || '-180 to 180 Valid.';
  },
  zeroHundred: (value) => {
    if (value >= 0 && value <= 100) return true;
    return 'Must between 0 and 100';
  },
};
