<?php

namespace BiFang\TutorialAdminBasic\Plugin;

class ViewModelPlugin {
  public function afterGetViewModelMessage(\BiFang\TutorialAdminBasic\ViewModel\ViewModelName $viewModel, $message) {
    return "Modified by plugin(interceptor): " . $message;
  }
}
