<template>
  <li
    v-if="canViewVerticalNavMenuLink(item)"
    class="nav-item"
    :class="{
      active: isActive,
      disabled: item.disabled,
    }"
  >
    <b-link v-bind="linkProps" class="d-flex align-items-center">
      <div v-if="item.icon !== 'ship'">
        <feather-icon :icon="item.icon || 'CircleIcon'" />
        <span class="menu-title text-truncate">{{ t(item.title) }}</span>
      </div>
      <div v-else>
        <b-img width="20px" src="@/assets/images/870056 (1).png"> </b-img>

        <span class="menu-title text-truncate pl-1">{{ t(item.title) }}</span>
      </div>

      <b-badge
        v-if="item.tag"
        pill
        :variant="item.tagVariant || 'primary'"
        class="mr-1 ml-auto"
      >
        {{ item.tag }}
      </b-badge>
    </b-link>
  </li>
</template>

<script>
import { useUtils as useAclUtils } from "@core/libs/acl";
import { BLink, BBadge, BImg } from "bootstrap-vue";
import { useUtils as useI18nUtils } from "@core/libs/i18n";
import useVerticalNavMenuLink from "./useVerticalNavMenuLink";
import mixinVerticalNavMenuLink from "./mixinVerticalNavMenuLink";

export default {
  components: {
    BLink,
    BBadge,
    BImg,
  },
  mixins: [mixinVerticalNavMenuLink],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { isActive, linkProps, updateIsActive } = useVerticalNavMenuLink(
      props.item
    );
    const { t } = useI18nUtils();
    const { canViewVerticalNavMenuLink } = useAclUtils();

    return {
      isActive,
      linkProps,
      updateIsActive,

      // ACL
      canViewVerticalNavMenuLink,

      // i18n
      t,
    };
  },
};
</script>
