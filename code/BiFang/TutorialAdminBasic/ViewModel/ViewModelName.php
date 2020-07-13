<?php

namespace BiFang\TutorialAdminBasic\ViewModel;

class ViewModelName implements \Magento\Framework\View\Element\Block\ArgumentInterface {
  public function __construct(){}
  public function getViewModelMessage() {
    return "Here is a view model message, one new feature from Magento 2.2  offloading features from Block classes into separate ViewModel classes.";
  }
}
