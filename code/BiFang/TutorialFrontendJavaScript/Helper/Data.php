<?php

namespace BiFang\TutorialFrontendJavaScript\Helper;

use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Framework\App\Config\ScopeConfigInterface;

class Data extends AbstractHelper {

  protected $scopeConfig;
  public function __construct(ScopeConfigInterface $scopeConfig) {
      $this->scopeConfig = $scopeConfig;
  }

  public function getConfigData() {
    return array(
      "template" => "BiFang_TutorialFrontendJavaScript/component-template",
      "jsSource" => "in xml",
      "templateSource" => "in Helper",
      "dataSource" => "from Helper",
      "extended" => "No"
    );
  }
  public function getLayoutTemplate($store = null) {
      return 'BiFang_TutorialFrontendJavaScript/' . $this->getDesignConfig('page_layout', $store);
  }

  public function getDesignConfig($code = '', $store = null) {
      // Not sure how to do it right now
      // return $this->scopeConfig->getValue('...' . $code, $store);
      return "children/child-template";
  }

  public function isDisableComponent($store = null) {
      return !$this->getDisplayConfig('is_enabled_component', $store);
  }

  public function getDisplayConfig($code = '', $store = null) {
      // Not sure how to do it right now
      // return $this->scopeConfig->getValue('...' . $code, $store);
      return false;
  }
}
