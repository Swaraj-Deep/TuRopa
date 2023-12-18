// Constants
import { VARIANT_VS_COMPONENT } from './typography.constants';

export function getComponent(variant) {
  const Component = VARIANT_VS_COMPONENT[variant];
  return Component;
}
